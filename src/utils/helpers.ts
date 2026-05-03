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

//Define o numero de colunas e o espaçamento dos cards com base na largura da tela
export function getPokemonGridLayout(screenWidth: number) {
  if (screenWidth < 360)
    return {
      columns: 2,
      cardGap: 10,
      horizontalPadding: 8,
      cardWidth: (screenWidth - 26) / 2,
    };
  if (screenWidth < 600)
    return {
      columns: 3,
      cardGap: 12,
      horizontalPadding: 12,
      cardWidth: (screenWidth - 36) / 3,
    };
  return {
    columns: 4,
    cardGap: 16,
    horizontalPadding: 16,
    cardWidth: (screenWidth - 60) / 4,
  };
}

// Função para coletar tipos únicos dos pokémons
export function collectUniqueTypes(pokemon: any[]) {
  const types = new Set<string>();
  pokemon.forEach((p) => {
    types.add(p.mainType);
    if (p.subType) types.add(p.subType);
  });
  return Array.from(types).sort();
}

// Função para filtrar a lista de pokémons com base na consulta de pesquisa e no filtro de tipo
export function filterPokemonList(
  pokemon: any[],
  query: string,
  type: string | null,
) {
  return pokemon.filter((p) => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchesType = !type || p.mainType === type || p.subType === type;
    return matchesQuery && matchesType;
  });
}
