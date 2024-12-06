'use client'
import React, { useEffect, useState } from 'react';
import CharacterForm from '../../components/CharacterForm';
import { useApi } from '../../context/ApiContext';
import { useSearchParams } from 'next/navigation';
import { Character } from '../../utlis/types';

const FormCharacter: React.FC = () => {
  const { getCharacterById } = useApi();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [dataCharacter, setDataCharacter] = useState<Character | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const character = getCharacterById(id as string);
      setDataCharacter(character);
    }
  }, [id]);

  return (
    <div className="p-8 bg-dark-blue text-beige">
      <h1 className="text-2xl font-bold mb-4">Formulario de Personaje</h1>
      <CharacterForm isEdit={!!dataCharacter} data={dataCharacter} />
    </div>
  );
};

export default FormCharacter;