'use client';
import React from 'react';
import dynamic from 'next/dynamic'
import Link from 'next/link';
 
const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/CharacterForm'),
  { ssr: false }
)

const FormCharacter: React.FC = () => {


  return (
    <div className="p-8 bg-dark-blue text-beige">
      <div className="flex gap-4 justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">Formulario de Personaje</h1>
        <Link href="/" className="bg-blue text-white px-4 py-2 rounded-md">Volver</Link>
      </div>
      <DynamicComponentWithNoSSR/>
    </div>
  );
};

export default FormCharacter;
