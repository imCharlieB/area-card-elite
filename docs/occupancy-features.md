# Occupancy / Presence Features — Ideas & Implementation Notes

This document captures feature ideas, config options, editor/UI suggestions, and implementation notes for improving how occupancy/presence is handled in Area Card Elite. Use this as a single source of truth to implement, discuss, and iterate on presence-related UI and behavior.

---

## Goals

- Represent presence as status (not an alarm).
- Make presence glanceable without confusing with alerts.
- Support multiple source types (binary_sensor, person, device_tracker) and normalize states.
- Provide several display modes the user can choose via the editor.
- Keep behavior accessible and theme-friendly.

---

## Feature list (short)

- occupancy_display: config option (count | badge | sensor | overlay | auto | none)
- occupancy_occupied_states: array of strings (configurable list of states treated as occupied)
- occupancy_color (override default purple)
- occupancy_show_last_seen: boolean (show humanized last_changed)
- occupancy_count behaviour: use occupancy_sensor when provided; otherwise count `person` and `device_tracker` entities in area
- editor options: selector to choose display mode, color picker, toggle to show last-seen
- responsive visual rules: icon-only for small containers
- CSS variable: --occupancy-glow for whole-card glow

---

## Config keys (proposal)

Example config additions (JS/YAML):

- occupancy_sensor: string  # optional explicit binary_sensor entity
- occupancy_display: string # "count" | "badge" | "sensor" | "overlay" | "auto" | "none" (default: "auto")
- occupancy_color: string  # hex color override
- occupancy_occupied_states: string[] # e.g. ["on","occupied","present","home","detected"]
- occupancy_show_last_seen: boolean # show last_changed/humanized date next to count or in tooltip
- occupancy_max_avatars: number # if using people avatars display mode

Notes:
- `auto` behavior: "count" on compact/compact-like views; "badge" or "sensor" on vertical/expanded views.
- Provide backwards compatibility: if occupancy_display not present, default to "sensor" or legacy behavior.

---

## Editor changes (UI)

- Add a new control in `Appearance` or `Alert Sensors` group:
  - `Occupancy display` (select): options mapped to the above list.
  - `Occupancy color` (color picker)
  - `Show last seen` (boolean)
  - Optionally: `Occupancy source` selector (entity picker for binary_sensor/person/device_tracker)

Implementation pointers:
- Update `src/editor.ts` to include the new selectors. Use `ha-selector` with `select` and `entity` as appropriate.
- If adding entity pickers for `person` or `device_tracker`, use `.selector={ entity: { domain: ["person","device_tracker","binary_sensor"] } }` and/or separate pickers for explicit `occupancy_sensor`.

---

## Rendering / Card changes

Rendering should be decided based on `occupancy_display` and the card's layout.

1) count (small person icon + count next to area name)
   - Render inline inside `.area-name` with class `.occupancy`.
   - Show `mdi:account` or `mdi:account-multiple` and numeric count when >1.
   - Tooltip (title) shows details or last-seen if configured.
   - Add `ha-card.occupied` class when count > 0 to enable soft-white glow.

2) badge (pill next to name)
   - Rounded pill with background `occupancy_color`, white text/icon.
   - For compact views show icon-only if width constrained.

3) sensor (render as sensor tile in sensors row)
   - Use same visual style as other sensors (icon + text). Good for parity.

4) overlay (corner badge)
   - Absolute-positioned dot in top-right with icon; tooltip or click reveals full info.

5) auto
   - Decide per layout: compact -> count, vertical -> sensor or badge.

---

## Occupancy state normalization

Default normalized occupied states (modifiable via `occupancy_occupied_states`):
```
["on", "occupied", "present", "home", "detected"]
```

Default vacancy states (implicit): anything not in occupied states; `unavailable` and `unknown` are ignored.

Notes on entity types:
- `binary_sensor` with device_class `occupancy` or `presence` typically report `on`/`off` and work well.
- `person` entities commonly report `home`/`not_home` or zone names. Normalize `home` -> occupied.
- `device_tracker` commonly reports `home`/`not_home` or zone names - treat similarly to `person`.

Edge cases:
- Some users use custom states; provide `occupancy_occupied_states` to configure those.
- Consider an optional `occupancy_match_entities` array where user lists entities to treat as presence sources.

---

## Last-seen / freshness

- If `occupancy_show_last_seen` is true and `occupancy_display` isn't purely icon-only:
  - Show humanized last-changed like "5m" or "last seen 2h" next to the count, or in the pill.
  - Otherwise show last-changed in tooltip.

Implementation note: use entity `last_changed` or `last_updated` and format using Home Assistant helpers where available (or fallback to simple humanize function).

---

## Device tracker / person support note

You currently do not have explicit editor controls for `person` or `device_tracker` entities. Options:

- Add entity pickers in editor for `person` / `device_tracker` domains to allow users to pick which person(s) to consider.
- Auto-detect `person` / `device_tracker` entities within the selected area and count them when no explicit `occupancy_sensor` is configured (this is what the card code can do by default).
- Provide a config flag `occupancy_sources: ["person", "device_tracker", "binary_sensor"]` to control what the card should count.

---

## CSS / Theming

- Provide CSS variable `--occupancy-glow` to control the whole-card glow when occupied (default `0 0 18px rgba(255,255,255,0.12)`).
- Provide `--occupancy-color` fallback to the color from `helpers.getAlertColor('occupancy', config)`.
- Ensure the glow is subtle (low opacity) and visually distinct from alert glow (`--alert-color` and alert classes) to avoid confusion.

---

## Accessibility

- Always include text or aria-labels (don't convey state via color alone).
- Tooltip or aria-label should contain the entity name and last-seen if configured.

---

## Tests & verification

- Unit test ideas (if adding test harness):
  - _getOccupancyCount() returns 0 when no persons or occupancy_sensor is occupied.
  - Renders correct icon/count when multiple person entities in area.
  - `occupied` class applied when count > 0.
  - `occupancy_show_last_seen` displays last_changed formatted.

---

## Implementation checklist (pick items to implement first)

- [ ] Add config keys to `AreaCardEliteConfig` in `src/common.ts`.
- [ ] Add editor selectors in `src/editor.ts`.
- [ ] Add rendering + helper normalization in `src/card.ts` (counting, label, glow, last-seen).  
- [ ] Add CSS variables and responsive rules.
- [ ] Add tests or simple runtime checks.
- [ ] Document config options in README.

---

## Misc notes / discussion

- Behavior should be conservative: do not treat presence as alert. The presence UI must not trigger red/orange alert visuals.
- Device tracker support can be implemented by counting `person`/`device_tracker` entities. If you prefer only binary sensors, make person/device_tracker optional via editor.
- Consider privacy: showing counts is generally fine; showing names/avatars should be opt-in.


---

File created by automation as a feature backlog. Update and iterate as you implement features.
