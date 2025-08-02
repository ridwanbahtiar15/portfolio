function getImageUrl(name: string, ext: string) {
  return new URL(`../image/${name}.${ext}`, import.meta.url).href;
}

export default getImageUrl;
