'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import DetalleReceta from '@/components/DetalleReceta'

const RecipeContainer = ({ id }) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const handleGetRecipe = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipe/${id}`);
      const data = response.data;
      setItem(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setNotFound(true);
    }
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);

  return (
    <div>
      {notFound && (
        <div>
          <h2>NOT FOUND</h2>
        </div>
        )}
      {loading && <div className='w-full min-h-screen flex items-center justify-center'><p className='text-[1.5em] font-[Philosopher]'>
                    Loading...</p></div>}
      {!loading && <DetalleReceta item={item}/>}
    </div>
  );
};

export default RecipeContainer;
