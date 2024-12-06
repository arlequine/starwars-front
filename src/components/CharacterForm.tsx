import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useApi } from '../context/ApiContext';
import { useSearchParams } from 'next/navigation';

const CharacterForm: React.FC = () => {
  const { addCharacter, editCharacter, getCharacterById } = useApi();
  const searchParams = useSearchParams();
  const characterId = searchParams.get('id');

  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [ship, setShip] = useState('');
  const [faction, setFaction] = useState('');

  useEffect(() => {
    if (characterId) {
      const character = getCharacterById(characterId);
      if (character) {
        setName(character.name);
        setMovie(character.movie || '');
        setShip(character.ship || '');
        setFaction(character.team || '');
      }
    }
  }, [characterId, getCharacterById]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const character = { name, movie, ship, team: faction };
    if (characterId) {
      editCharacter(characterId, character);
    } else {
      addCharacter(character);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6  flex flex-col gap-4 w-full">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue text-dark-blue"
        required
      />
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Película"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue text-dark-blue"
        required
      />
      <input
        type="text"
        value={ship}
        onChange={(e) => setShip(e.target.value)}
        placeholder="Nave"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue text-dark-blue"
        required
      />
      <Select
        value={faction ? { value: faction, label: faction } : null}
        onChange={(selectedOption) => setFaction(selectedOption?.value || '')}
        options={[
          { value: 'Imperial', label: 'Imperial' },
          { value: 'Rebel', label: 'Rebel' },
        ]}
        placeholder="Selecciona una facción"
        className="basic-select text-dark-blue"
        classNamePrefix="select"
        required
      />

      <button type="submit" className="bg-blue text-white px-4 py-2 rounded-md hover:bg-teal transition">
        {characterId ? 'Editar' : 'Agregar'}
      </button>
    </form>
  );
};

export default CharacterForm;