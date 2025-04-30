// https://image.tmdb.org/t/p/original//elv9BNtTrbtiyif8cE02AuK1nQi.jpg

export const makeImagePath = (id: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
  // 옛날 영화에 format 없는경우가 있어서 그럴때에 original 쓴다고
};
