import { createElement } from "react";

export const iconPaths = {
  arrow: createElement("path", { d: "M5 12h14M13 6l6 6-6 6" }),
  check: createElement("path", { d: "m5 12 4 4L19 6" }),
  code: createElement("path", { d: "M10 16.5 5.5 12 10 7.5M14 7.5l4.5 4.5-4.5 4.5M13 4l-2 16" }),
  phone: createElement(
    "g",
    null,
    createElement("rect", { x: 7, y: 3, width: 10, height: 18, rx: 2.5 }),
    createElement("path", { d: "M11 18h2" }),
  ),
  layout: createElement(
    "g",
    null,
    createElement("rect", { x: 3, y: 4, width: 18, height: 16, rx: 3 }),
    createElement("path", { d: "M3 9h18M9 20V9" }),
  ),
  spark: createElement("path", {
    d: "m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3ZM5 17l.8 1.8L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-1.2L5 17Z",
  }),
  chart: createElement("path", { d: "M4 19V5M8 17v-5M12 17V8M16 17v-8M20 17v-3" }),
  mail: createElement(
    "g",
    null,
    createElement("rect", { x: 3, y: 5, width: 18, height: 14, rx: 2.5 }),
    createElement("path", { d: "m4 7 8 6 8-6" }),
  ),
  target: createElement(
    "g",
    null,
    createElement("circle", { cx: 12, cy: 12, r: 8 }),
    createElement("circle", { cx: 12, cy: 12, r: 3 }),
    createElement("path", { d: "M12 2v3M12 19v3M2 12h3M19 12h3" }),
  ),
  message: createElement(
    "g",
    null,
    createElement("path", { d: "M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8 8 0 1 1 21 12Z" }),
    createElement("path", { d: "M8 10h8M8 14h5" }),
  ),
  clock: createElement(
    "g",
    null,
    createElement("circle", { cx: 12, cy: 12, r: 9 }),
    createElement("path", { d: "M12 7v5l3 2" }),
  ),
  shield: createElement("path", { d: "M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z" }),
  euro: createElement(
    "g",
    null,
    createElement("path", { d: "M17 6.5A6 6 0 1 0 17 17.5" }),
    createElement("path", { d: "M4 10h9M4 14h9" }),
  ),
  bolt: createElement("path", { d: "m13 2-9 12h7l-1 8 9-12h-7l1-8Z" }),
  wrench: createElement(
    "g",
    null,
    createElement("path", { d: "M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5L15 12l-3-3 2.7-2.7Z" }),
    createElement("path", { d: "m7 17 2 2" }),
  ),
};

