'use client'
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ id, name, rating, image }) => {
   
  return (
    <div className='w-[25%]'>
      <Image className='rounded-[20px]' src={image} width={260} height={260} alt={name} />
      <h3>{name}</h3>
      <p>{rating}</p>
      <Link href={`/recipe/${id}`}>Ver receta</Link>
    </div>
  )
}

export default Card