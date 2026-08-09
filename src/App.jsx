import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";

import { CLERKSHIPS } from "./data/index.js";
import { STATUS, buildIndex, tally } from "./lib/objectives.js";
import storage from "./lib/storage.js";
import "./styles.css";

/* ------------------------------------------------------------------ *
 *  Core app. Rotation-agnostic — everything it renders comes from the
 *  data files in src/data. Add a rotation there, not here.
 * ------------------------------------------------------------------ */

const STORAGE_KEY = "clerkship-tracker:v1";

export default function App() {
  const [clerkshipId, setClerkshipId] = useState(CLERKSHIPS[0].id);
  const [statuses, setStatuses] = useState({});
  const [collapsed, setCollapsed] = useState({});
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [starOnly, setStarOnly] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [saveState, setSaveState] = useState("idle");
  const [confirmReset, setConfirmReset] = useState(false);
  const sectionRefs = useRef({});
  const saveTimer = useRef(null);

  const clerkship = CLERKSHIPS.find((c) => c.id === clerkshipId);
  const { sections, all } = useMemo(() => buildIndex(clerkship), [clerkshipId]);

  /* load once */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await storage.get(STORAGE_KEY);
        if (!cancelled && res?.value) {
          const parsed = JSON.parse(res.value);
          setStatuses(parsed.statuses?.[clerkshipId] ?? {});
          setCollapsed(parsed.collapsed?.[clerkshipId] ?? {});
        }
      } catch {
        /* no saved progress yet — start clean */
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [clerkshipId]);

  /* save, debounced */
  const persist = useCallback(
    (nextStatuses, nextCollapsed) => {
      clearTimeout(saveTimer.current);
      setSaveState("saving");
      saveTimer.current = setTimeout(async () => {
        try {
          const prev = await storage.get(STORAGE_KEY).catch(() => null);
          const base = prev?.value ? JSON.parse(prev.value) : { statuses: {}, collapsed: {} };
          base.statuses = { ...base.statuses, [clerkshipId]: nextStatuses };
          base.collapsed = { ...base.collapsed, [clerkshipId]: nextCollapsed };
          base.updatedAt = new Date().toISOString();
          const ok = await storage.set(STORAGE_KEY, JSON.stringify(base));
          setSaveState(ok ? "saved" : "error");
        } catch {
          setSaveState("error");
        }
      }, 500);
    },
    [clerkshipId]
  );

  const cycle = (id) => {
    setStatuses((prev) => {
      const next = { ...prev };
      const cur = next[id] ?? STATUS.TODO;
      if (cur === STATUS.TODO) next[id] = STATUS.ACTIVE;
      else if (cur === STATUS.ACTIVE) next[id] = STATUS.DONE;
      else delete next[id];
      persist(next, collapsed);
      return next;
    });
  };

  const toggleSection = (num) => {
    setCollapsed((prev) => {
      const next = { ...prev, [num]: !prev[num] };
      persist(statuses, next);
      return next;
    });
  };

  const setAllCollapsed = (val) => {
    const next = {};
    if (val) sections.forEach((s) => (next[s.num] = true));
    setCollapsed(next);
    persist(statuses, next);
  };

  const resetProgress = () => {
    setStatuses({});
    persist({}, collapsed);
    setConfirmReset(false);
  };

  const overall = tally(all, statuses);
  const pct = overall.total ? Math.round((overall.done / overall.total) * 100) : 0;

  const matches = (item) => {
    if (starOnly && !item.star) return false;
    const st = statuses[item.id] ?? STATUS.TODO;
    if (filter === "todo" && st !== STATUS.TODO) return false;
    if (filter === "active" && st !== STATUS.ACTIVE) return false;
    if (filter === "done" && st !== STATUS.DONE) return false;
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      if (!item.text.toLowerCase().includes(q)) return false;
    }
    return true;
  };

  const filtering = starOnly || filter !== "all" || query.trim().length > 0;
  const visibleCount = all.filter(matches).length;

  const scrollToSection = (num) => {
    setCollapsed((prev) => {
      if (!prev[num]) return prev;
      const next = { ...prev, [num]: false };
      persist(statuses, next);
      return next;
    });
    requestAnimationFrame(() =>
      sectionRefs.current[num]?.scrollIntoView({ behavior: "smooth", block: "start" })
    );
  };

  return (
    <div className="ct-root">
      <header className="ct-head">
        <div className="ct-head-top">
          <div>
            <div className="ct-eyebrow">Clerkship objectives</div>
            <h1 className="ct-title">{clerkship.name}</h1>
          </div>
          {CLERKSHIPS.length > 1 && (
            <div className="ct-clerkships" role="tablist">
              {CLERKSHIPS.map((c) => (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={c.id === clerkshipId}
                  className={"ct-chip" + (c.id === clerkshipId ? " is-on" : "")}
                  onClick={() => setClerkshipId(c.id)}
                >
                  {c.short}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* coverage map — one cell per objective, blocked by section */}
        <div className="ct-map" aria-hidden="true">
          {sections.map((s) => {
            const items = s.groups.flatMap((g) => g.items);
            return (
              <button
                key={s.num}
                className="ct-map-block"
                onClick={() => scrollToSection(s.num)}
                title={`${s.num} · ${s.title}`}
                tabIndex={-1}
              >
                <span className="ct-map-num">{s.num}</span>
                <span className="ct-map-grid">
                  {items.map((it) => (
                    <span
                      key={it.id}
                      className={"ct-cell s" + (statuses[it.id] ?? STATUS.TODO)}
                    />
                  ))}
                </span>
              </button>
            );
          })}
        </div>

        <div className="ct-stats">
          <span className="ct-stat">
            <b>{overall.done}</b> complete
          </span>
          <span className="ct-stat">
            <b>{overall.active}</b> in progress
          </span>
          <span className="ct-stat">
            <b>{overall.todo}</b> to go
          </span>
          <span className="ct-stat ct-pct">{pct}%</span>
          <span className={"ct-save " + saveState}>
            {saveState === "saving" ? "Saving" : saveState === "error" ? "Not saved" : loaded ? "Saved" : ""}
          </span>
        </div>
      </header>

      <div className="ct-tools">
        <input
          className="ct-search"
          type="search"
          placeholder="Search objectives"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search objectives"
        />
        <div className="ct-filters" role="group" aria-label="Filter by status">
          {[
            ["all", "All"],
            ["todo", "To do"],
            ["active", "In progress"],
            ["done", "Done"],
          ].map(([v, label]) => (
            <button
              key={v}
              className={"ct-chip" + (filter === v ? " is-on" : "")}
              onClick={() => setFilter(v)}
              aria-pressed={filter === v}
            >
              {label}
            </button>
          ))}
          <button
            className={"ct-chip ct-star-chip" + (starOnly ? " is-on" : "")}
            onClick={() => setStarOnly((v) => !v)}
            aria-pressed={starOnly}
            title="High-yield only"
          >
            ★ High-yield
          </button>
        </div>
        <div className="ct-tools-right">
          <button className="ct-ghost" onClick={() => setAllCollapsed(true)}>
            Collapse all
          </button>
          <button className="ct-ghost" onClick={() => setAllCollapsed(false)}>
            Expand all
          </button>
          {confirmReset ? (
            <>
              <button className="ct-ghost ct-danger" onClick={resetProgress}>
                Confirm reset
              </button>
              <button className="ct-ghost" onClick={() => setConfirmReset(false)}>
                Cancel
              </button>
            </>
          ) : (
            <button className="ct-ghost" onClick={() => setConfirmReset(true)}>
              Reset progress
            </button>
          )}
        </div>
      </div>

      {filtering && (
        <p className="ct-filternote">
          Showing {visibleCount} of {all.length} objectives.
        </p>
      )}

      <main className="ct-sections">
        {sections.map((s) => {
          const items = s.groups.flatMap((g) => g.items);
          const t = tally(items, statuses);
          const shown = items.filter(matches).length;
          if (filtering && shown === 0) return null;
          const isCollapsed = !!collapsed[s.num];
          return (
            <section
              key={s.num}
              className="ct-section"
              ref={(el) => (sectionRefs.current[s.num] = el)}
            >
              <button
                className="ct-section-head"
                onClick={() => toggleSection(s.num)}
                aria-expanded={!isCollapsed}
              >
                <span className="ct-section-num">{s.num}</span>
                <span className="ct-section-meta">
                  <span className="ct-section-title">{s.title}</span>
                  <span className="ct-section-blurb">{s.blurb}</span>
                </span>
                <span className="ct-section-count">
                  {t.done}/{t.total}
                </span>
                <span className="ct-bar" aria-hidden="true">
                  <span className="ct-bar-done" style={{ width: `${(t.done / t.total) * 100}%` }} />
                  <span
                    className="ct-bar-active"
                    style={{ width: `${(t.active / t.total) * 100}%` }}
                  />
                </span>
                <span className={"ct-caret" + (isCollapsed ? " is-closed" : "")}>▾</span>
              </button>

              {!isCollapsed && (
                <div className="ct-groups">
                  {s.groups.map((g) => {
                    const gItems = g.items.filter(matches);
                    if (gItems.length === 0) return null;
                    return (
                      <div key={g.title} className="ct-group">
                        <h3 className="ct-group-title">{g.title}</h3>
                        <ul className="ct-list">
                          {gItems.map((it) => {
                            const st = statuses[it.id] ?? STATUS.TODO;
                            return (
                              <li key={it.id}>
                                <button
                                  className={"ct-item s" + st}
                                  onClick={() => cycle(it.id)}
                                  aria-pressed={st === STATUS.DONE}
                                >
                                  <span className="ct-glyph" aria-hidden="true">
                                    {st === STATUS.DONE ? "●" : st === STATUS.ACTIVE ? "◐" : "○"}
                                  </span>
                                  <span className="ct-item-text">{it.text}</span>
                                  {it.star && <span className="ct-item-star">★</span>}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}

        {filtering && visibleCount === 0 && (
          <p className="ct-empty">
            Nothing matches. Clear the search and filters to see the full list.
          </p>
        )}
      </main>

      <footer className="ct-foot">
        <span>Tap an objective to move it: to do → in progress → done.</span>
        <span>Progress saves automatically.</span>
      </footer>
    </div>
  );
}
