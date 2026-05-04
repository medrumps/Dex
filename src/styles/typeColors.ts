export const typeColors: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const tailwindTypeColors: Record<string, string> = {
  normal: "text-gray-500",
  fire: "text-red-500",
  water: "text-blue-500",
  electric: "text-yellow-500",
  grass: "text-green-500",
  ice: "text-blue-500",
  fighting: "text-red-500",
  poison: "text-purple-500",
  ground: "text-brown-500",
  flying: "text-blue-500",
  psychic: "text-purple-500",
  bug: "text-green-500",
  rock: "text-gray-500",
  ghost: "text-purple-500",
  dragon: "text-red-500",
  dark: "text-gray-500",
  steel: "text-gray-500",
  fairy: "text-purple-500",
};

export const buildTailwindColorClass = (
  type: string,
  useColor: boolean = false,
) => {
  if (useColor) {
    return `text-xl font-bold ${tailwindTypeColors[type ?? ""]}`;
  }
  return "text-xl font-bold";
};
