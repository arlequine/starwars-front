interface Character {
  _id?: string;
  name: string;
  movie: string;
  ship: string;
  team?: string;
}

interface ApiContextType {
  characters: Character[];
  fetchCharacters: () => void;
  addCharacter: (character: Character) => void;
  editCharacter: (id: string, updatedCharacter: Character) => void;
  deleteCharacter: (id: string) => void;
  getCharacterById: (id: string) => Character | undefined;
}

export type { Character, ApiContextType };