import { createElement } from "react";

const path = (d) => createElement("path", { d });
const circle = (props) => createElement("circle", props);
const rect = (props) => createElement("rect", props);
const g = (...children) => createElement("g", null, ...children);

export const iconPaths = {
  arrow: g(path("M4 12h15"), path("m13 6 6 6-6 6")),
  check: path("m5 12 4.2 4.2L19 6.8"),
  globe: g(
    circle({ cx: 12, cy: 12, r: 9 }),
    path("M3 12h18"),
    path("M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21"),
    path("M12 3C9.8 5.4 8.6 8.4 8.6 12s1.2 6.6 3.4 9"),
  ),
  wordpress: g(
    circle({ cx: 12, cy: 12, r: 9 }),
    path("M7 8.8 9.4 16M12 8.8 14.1 16M17.2 8.8 14.1 16"),
    path("M5.7 8.8h2.8M10.8 8.8h2.4M15.5 8.8h2.8"),
  ),
  dashboard: g(
    rect({ x: 3, y: 4, width: 18, height: 16, rx: 3 }),
    path("M7 9h4M7 13h3M7 17h5"),
    path("M15 9h2M14 13h3M15 17h2"),
  ),
  refresh: g(
    path("M20 7v5h-5"),
    path("M4 17v-5h5"),
    path("M18.4 9a7 7 0 0 0-12.1-2.8L4 8.4"),
    path("M5.6 15a7 7 0 0 0 12.1 2.8L20 15.6"),
  ),
  palette: g(
    path("M12 3a9 9 0 0 0 0 18h1.2a2 2 0 0 0 1.8-2.8 1.8 1.8 0 0 1 1.6-2.6H18a6 6 0 0 0 0-12h-6Z"),
    path("M8 10h.01M11 7.7h.01M14.5 8.5h.01"),
  ),
  code: g(path("M10 16.5 5.5 12 10 7.5"), path("m14 7.5 4.5 4.5-4.5 4.5"), path("m13 4-2 16")),
  phone: g(rect({ x: 7, y: 3, width: 10, height: 18, rx: 2.5 }), path("M11 18h2"), path("M10 6h4")),
  layout: g(rect({ x: 3, y: 4, width: 18, height: 16, rx: 3 }), path("M3 9h18"), path("M9 20V9")),
  spark: g(path("m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"), path("M5 17l.8 1.8L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-1.2L5 17Z")),
  chart: g(path("M4 19V5"), path("M8 17v-5"), path("M12 17V8"), path("M16 17v-8"), path("M20 17v-3")),
  mail: g(rect({ x: 3, y: 5, width: 18, height: 14, rx: 2.5 }), path("m4 7 8 6 8-6")),
  target: g(circle({ cx: 12, cy: 12, r: 8 }), circle({ cx: 12, cy: 12, r: 3 }), path("M12 2v3M12 19v3M2 12h3M19 12h3")),
  message: g(path("M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8 8 0 1 1 21 12Z"), path("M8 10h8M8 14h5")),
  clock: g(circle({ cx: 12, cy: 12, r: 9 }), path("M12 7v5l3 2")),
  shield: g(path("M12 3 20 6v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Z"), path("m9 12 2 2 4-5")),
  euro: g(path("M17 6.5A6 6 0 1 0 17 17.5"), path("M4 10h9M4 14h9")),
  bolt: path("m13 2-9 12h7l-1 8 9-12h-7l1-8Z"),
  wrench: g(path("M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5L15 12l-3-3 2.7-2.7Z"), path("m7 17 2 2")),
  star: path("m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.9-5.4 2.9 1-6-4.4-4.3 6.1-.9L12 3Z"),
  instagram: g(rect({ x: 4, y: 4, width: 16, height: 16, rx: 5 }), circle({ cx: 12, cy: 12, r: 3.5 }), path("M16.8 7.2h.01")),
  linkedin: g(path("M6.5 10v8M6.5 6.5v.01M10.5 18v-8"), path("M10.5 13.5c0-2.2 1.2-3.7 3.3-3.7 2 0 3.2 1.3 3.2 3.7V18")),
};
