'use client'
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ id, name, rating, image, difficulty}) => {
   
  return (
    <div className='w-[48%] sm:w-[30%] md:w-[23%] mb-8'>
      <Link href={`/recipe/${id}`}>
      
        <div className='relative aspect-square overflow-hidden rounded-[20px] mb-4'>
          <Image className='object-cover transition-all duration-500 hover:scale-110 hover:contrast-125 hover:saturate-150' src={image} fill alt={name} />

          <p className='absolute top-[10px] right-[10px] flex items-center justify-center px-[0.6em] py-[0.1em] text-sm rounded-full bg-[#05081F] text-[#EEEFD8] '>★{rating}</p>
        
        </div>

      </Link>
      
      <h3 className='text-[1.1em] sm:text-[1.3em] md:text-[1.5em] font-[Philosopher]'>{name}</h3>
      <p className='text-[0.8em] sm:text-[0.9em] md:text-[1em]'>{difficulty}</p>
  
      
    </div>
  )
}

export default Card