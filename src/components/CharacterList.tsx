'use client'
import React from 'react';
import { useApi } from '../context/ApiContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ImperialIcon from '../assets/images/imperial-icon.png';
import RebelIcon from '../assets/images/rebel-icon.png';

const CharacterList: React.FC = () => {
  const { characters, deleteCharacter } = useApi();
  const router = useRouter();

  const handleDelete = (id: string) => {
    deleteCharacter(id);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {characters.map(character => (
        <div key={character._id} className="border p-4 rounded-lg shadow-lg bg-beige hover:shadow-2xl transition-shadow transform hover:scale-105">
        <h2 className="font-bold text-xl text-center text-dark-blue">{character.name}</h2>
        <p className="text-dark-blue text-center">Película: {character.movie}</p>
        <p className="text-dark-blue text-center">Nave: {character.ship}</p>
        {character.team === 'Rebel' ? (
          <Image src={RebelIcon} alt="Rebel" width={50} height={50} className="mx-auto" />
        ) : character.team === 'Imperial' ? (
          <Image src={ImperialIcon} alt="Imperial" width={50} height={50} className="mx-auto" />
        ) : null}
        <div className="flex justify-between mt-4">
          <button onClick={() => router.push(`/form?id=${character._id}`)} className="bg-blue text-white p-2 rounded hover:bg-teal transition-colors w-full mr-1">
            Editar
          </button>
          <button onClick={() => handleDelete(character._id as string)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors w-full ml-1">
            Eliminar
          </button>
        </div>
        </div>  
      ))}
      </div>
    </>
  );
};

export default CharacterList;