export function collectUniqueTypes(pokemon: any[]) {
  const types = new Set<string>();
  pokemon.forEach((p) => {
    types.add(p.mainType);
    if (p.subType) types.add(p.subType);
  });
  return Array.from(types).sort();
}

export function filterPokemonList(pokemon: any[], query: string, type: string | null) {
  return pokemon.filter((p) => {
    const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
    const matchesType = !type || p.mainType === type || p.subType === type;
    return matchesQuery && matchesType;
  });
}
