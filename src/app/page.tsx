import React from 'react';
import CharacterList from '../components/CharacterList';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="p-8 bg-dark-blue text-beige">
      <section className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 text-beige">Personajes de Star Wars</h1>
        <Link href="/form" className="bg-blue text-white px-4 py-2 rounded-md">
          Crear Personaje
        </Link>
      </section>
      <CharacterList />
    </div>
  );
};

export default Home;