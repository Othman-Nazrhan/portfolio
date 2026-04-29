const IMAGE_WIDTHS = [640, 960, 1280, 1600];

export function getProjectImageSrcSet(src) {
  return IMAGE_WIDTHS.map((width) => `${setImageWidth(src, width)} ${width}w`).join(", ");
}

export function setImageWidth(src, width) {
  const separator = src.includes("?") ? "&" : "?";

  if (src.includes("w=")) {
    return src.replace(/w=\d+/, `w=${width}`);
  }

  return `${src}${separator}w=${width}`;
}
