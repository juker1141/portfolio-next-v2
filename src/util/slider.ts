export const isFirstSilder = (hash: string, section: string) => {
  const hashParts = hash.split("/");

  if (
    (hash.indexOf(`#${section}/1`) !== -1 ||
      hash.indexOf(`#${section}`) !== -1) &&
    (hashParts[1] === "1" || hashParts[1] === undefined)
  ) {
    return true;
  }
  return false;
};

export const isLastSilder = (hash: string, section: string) => {
  const hashParts = hash.split("/");
  const sectionEl = document.getElementById(section.toLowerCase());
  const sliders = sectionEl?.getElementsByTagName("li");

  if (
    sliders &&
    hash.indexOf(`#${section}/${sliders.length}`) !== -1 &&
    hashParts[1] === sliders.length.toString()
  ) {
    return true;
  }
  return false;
};
