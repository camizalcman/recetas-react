import Image from 'next/image';


const Footer = () => {

    return (
        <div className='flex flex-col items-center justify-center text-center px-6 py-16 text-center'>
            <Image src={'/assets/img/cubiertos-blanco.png'} width={200} height={200} alt='logo cocina' className="w-12 h-auto mb-4"/>
            <h2 className='font-[Philosopher] text-[1.5em]'>Descubrí recetas, inspiración y todo lo que necesitás para disfrutar de la cocina.</h2>
        </div>
    )
}

export default Footer