'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FaClock, FaFire, FaUsers, FaSignal, FaGlobe, FaBolt } from 'react-icons/fa';

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
      {loading && 'Loading...'}
      {!loading && 
      <section>
        <div className='w-full flex items-center justify-center py-20'>
            <div className='w-[90%] flex flex-col'>
              <div className='flex flex-col gap-6 md:flex-row'>
                  <div className='relative aspect-square mb-4 md:w-[50%] w-[100%]'>
                      <Image
                      className='object-cover rounded-[20px]'
                      src={item.image}
                      fill
                      alt={item.name}
                      />

                      <p className='absolute top-[10px] right-[10px] flex items-center justify-center px-[0.6em] py-[0.1em] text-sm rounded-full bg-[#05081F] text-[#EEEFD8] '>★{item.rating}</p>
                  </div>

                
                  <div className='md:w-[50%] w-[100%] flex flex-col gap-4'>
                      <h3 className='text-[2.5em] font-[Philosopher]'>{item.name}</h3>

                      <div className='flex flex-wrap w-full gap-[10px] mt-5'>
                          <div className='w-[30%] flex flex-col items-center gap-[6px] p-4 text-center border rounded-[10px] border-[#f08a2a] text-[12px]'>
                              <FaClock className='text-[20px] text-[#f08a2a]' />
                              <p>Prep time: {item.prepTimeMinutes} min</p>
                          </div>

                          <div className='w-[30%] flex flex-col items-center gap-[6px] p-4 text-center border rounded-[10px] border-[#f08a2a] text-[12px]'>
                              <FaFire className='text-[20px] text-[#f08a2a]' />
                              <p>Cook time: {item.cookTimeMinutes} min</p>
                          </div>

                          <div className='w-[30%] flex flex-col items-center gap-[6px] p-4 text-center border rounded-[10px] border-[#f08a2a] text-[12px]'>
                              <FaUsers className='text-[20px] text-[#f08a2a]' />
                              <p>Servings: {item.servings}</p>
                          </div>

                          <div className='w-[30%] flex flex-col items-center gap-[6px] p-4 text-center border rounded-[10px] border-[#f08a2a] text-[12px]'>
                              <FaSignal className='text-[20px] text-[#f08a2a]' />
                              <p>Difficulty: {item.difficulty}</p>
                          </div>

                          <div className='w-[30%] flex flex-col items-center gap-[6px] p-4 text-center border rounded-[10px] border-[#f08a2a] text-[12px]'>
                              <FaGlobe className='text-[20px] text-[#f08a2a]' />
                              <p>Cuisine: {item.cuisine}</p>
                          </div>

                          <div className='w-[30%] flex flex-col items-center gap-[6px] p-4 text-center border rounded-[10px] border-[#f08a2a] text-[12px]'>
                              <FaBolt className='text-[20px] text-[#f08a2a]' />
                              <p>Calories: {item.caloriesPerServing}</p>
                          </div>

                      </div>

                      <div className='flex flex-col gap-3 mt-8'>
                        <h2 className='text-[2em] font-[Philosopher]'>Ingredients</h2>
                          {item.ingredients?.map((ingredient) => (
                            <p className='leading-none' key={ingredient}>• {ingredient}</p>
                          ))}
                      </div>

                  </div>
                </div>

                <div className='flex flex-col gap-3 mt-8'>
                      <h2 className='text-[2em] font-[Philosopher]'>Instructions</h2>
                        {item.instructions?.map((ingredient) => (
                          <p className='leading-none' key={ingredient}>• {ingredient}</p>
                        ))}
                </div>
                
            </div>

        </div>
        </section>}
    </div>
  );
};

export default RecipeContainer;
