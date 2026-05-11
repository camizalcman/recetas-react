import Image from 'next/image';

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
        <Image className="object-cover" src='/assets/img/hero.jpg' fill alt='Restaurante'/>
        <div className='absolute inset-0 flex flex-col text-white z-10 '>
            <h1>Recetas que inspiran</h1>
            <h2>Explorá nuevas combinaciones y sabores</h2>
            <button>Ver recetas</button>
        </div>
    </div>
  )
}

export default Hero