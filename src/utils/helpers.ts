import { styles } from "../../src/styles/estilos";
import { typeColors } from "../../src/styles/typeColors";

// Função para capitalizar a primeira letra de uma string
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Função que retorna estilos dinâmicos
export const getContainerStyle = (mainType: string) => ({
  ...styles.container,
  backgroundColor: typeColors[mainType] + "80", // Adiciona transparência (80 = 50%)
});

// Função para gradiente
// app/utils/helpers.ts
export function getGradientColors(
  mainType: string,
  subType?: string | null,
): [string, string] {
  const mainColor = typeColors[mainType];
  const subColor =
    subType && typeColors[subType] ? typeColors[subType] : mainColor;
  return [mainColor, subColor];
}
