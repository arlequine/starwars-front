import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useApi } from '../context/ApiContext';

const CharacterForm: React.FC<{ isEdit?: boolean; data?: any }> = ({ isEdit, data }) => {
  const { addCharacter, editCharacter } = useApi();

  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [ship, setShip] = useState('');
  const [faction, setFaction] = useState('');

  useEffect(() => {
    if (isEdit && data) {
      setName(data.name);
      setMovie(data.movie);
      setShip(data.ship);
      setFaction(data.team);
    }
  }, [isEdit, data]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const character = { name, movie, ship, team: faction };
    if (isEdit && data) {
      editCharacter(data._id, character);
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
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
        required
      />
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Película"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
        required
      />
      <input
        type="text"
        value={ship}
        onChange={(e) => setShip(e.target.value)}
        placeholder="Nave"
        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"
        required
      />
      <Select
        value={faction ? { value: faction, label: faction } : null} // Valor del selector
        onChange={(selectedOption) => setFaction(selectedOption.value)} // Manejar cambio de selección
        options={[
          { value: 'Imperial', label: 'Imperial' },
          { value: 'Rebel', label: 'Rebel' },
        ]}
        placeholder="Selecciona una facción"
        className="basic-select"
        classNamePrefix="select"
        required
      />

      <button type="submit" className="bg-blue text-white px-4 py-2 rounded-md hover:bg-teal transition">
        {isEdit ? 'Editar' : 'Agregar'}
      </button>
    </form>
  );
};

export default CharacterForm;