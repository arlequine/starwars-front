'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '@/api/instance';
import { Character, ApiContextType } from '@/utlis/types';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const router = useRouter();
  const fetchCharacters = async () => {
    try {
      const response = await axiosInstance.get('/api/characters');
      setCharacters(response.data);
    } catch (error) {
      toast.error('Error al obtener los personajes');
    }
  };

  const addCharacter = async (character: Character) => {
    try {
      await axiosInstance.post('/api/characters', character);
      fetchCharacters();
      toast.success('Personaje agregado correctamente');
      router.push('/');
    } catch (error) {
      toast.error('Error al agregar el personaje');
    }
  };

  const editCharacter = async (id: string, updatedCharacter: Character) => {
    try {
      await axiosInstance.put(`/api/characters/${id}`, updatedCharacter);
      fetchCharacters();
      toast.success('Personaje editado correctamente');
      router.push('/');
    } catch (error) {
      toast.error('Error al editar el personaje');
    }
  };

  const deleteCharacter = async (id: string) => {
    try {
      await axiosInstance.delete(`/api/characters/${id}`);
      fetchCharacters();
      toast.success('Personaje eliminado correctamente');
    } catch (error) {
      toast.error('Error al eliminar el personaje');
    }
  };

  const getCharacterById = (id: string) => {
    return characters.find(character => character._id === id);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <ApiContext.Provider value={{ characters, fetchCharacters, addCharacter, editCharacter, deleteCharacter, getCharacterById }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};