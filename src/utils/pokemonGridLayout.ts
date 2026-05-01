export function getPokemonGridLayout(screenWidth: number) {
  if (screenWidth < 360) return { columns: 2, cardGap: 10, horizontalPadding: 8, cardWidth: (screenWidth - 26) / 2 };
  if (screenWidth < 600) return { columns: 3, cardGap: 12, horizontalPadding: 12, cardWidth: (screenWidth - 36) / 3 };
  return { columns: 4, cardGap: 16, horizontalPadding: 16, cardWidth: (screenWidth - 60) / 4 };
}
