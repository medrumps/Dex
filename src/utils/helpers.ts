import { typeColors } from "../styles/typeColors";

// Função para capitalizar a primeira letra de uma string
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função para gradiente
export function getGradientColors(
  mainType: string,
  subType?: string | null,
): [string, string] {
  const mainColor = typeColors[mainType];
  const subColor =
    subType && typeColors[subType] ? typeColors[subType] : mainColor;
  return [mainColor, subColor];
}
