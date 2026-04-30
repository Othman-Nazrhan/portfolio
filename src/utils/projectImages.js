const IMAGE_WIDTHS = [640, 960, 1280, 1600];

export function getProjectImageSrcSet(src) {
  if (!canResizeImage(src)) {
    return undefined;
  }

  return IMAGE_WIDTHS.map((width) => `${setImageWidth(src, width)} ${width}w`).join(", ");
}

export function setImageWidth(src, width) {
  if (!canResizeImage(src)) {
    return src;
  }

  const separator = src.includes("?") ? "&" : "?";

  if (src.includes("w=")) {
    return src.replace(/w=\d+/, `w=${width}`);
  }

  return `${src}${separator}w=${width}`;
}

function canResizeImage(src) {
  return src.startsWith("https://images.unsplash.com/") || src.startsWith("https://images.pexels.com/");
}
