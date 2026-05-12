'use client'
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ id, name, rating, image }) => {
   
  return (
    <div className='w-[90%] sm:w-[23%] '>
      <div className='relative aspect-square'><Image className='rounded-[20px] object-cover' src={image} fill alt={name} /></div>
      <h3>{name}</h3>
      <p>{rating}</p>
      <Link href={`/recipe/${id}`}>Ver receta</Link>
    </div>
  )
}

export default Card