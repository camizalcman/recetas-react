import Image from 'next/image';

const Hero = () => {
  return (
    <div id="inicio" className='relative w-full h-screen'>
        <Image className="object-cover" src='/assets/img/hero.jpg' fill alt='Restaurante'/>
        
        <div className='absolute inset-0 bg-gradient-to-b from-[rgba(5,8,31,0.6)] via-[rgba(5,8,31,0.7)] to-[rgba(5,8,31,1)] z-0' />
        
        <div className='absolute inset-0 z-10 flex flex-col items-start px-12 justify-center text-white max-w-[700px]'>
            <h1 className='font-medium text-[2.5em] sm:text-[3.3em] md:text-[3.5em] font-[Philosopher]'>Recetas que inspiran</h1>
            <h2 className='mb-4 font-medium text-[1.8em] sm:text-[1.8em] md:text-[2em] font-[Philosopher]'>Explorá nuevas combinaciones y sabores</h2>
            <button className='px-16 py-3 text-sm font-medium text-black transition-all duration-300 border-none rounded-full bg-[#EEEFD8] hover:bg-[rgb(233,154,84)]'><a href="#recipes">Ver recetas</a></button>
        </div>
    </div>
  )
}

export default Hero