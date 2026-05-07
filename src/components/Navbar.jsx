import Image from 'next/image';

const Navbar = () => {

    return (
        <div className='flex items-center justify-between px-6 py-4 text-white sm:px-10'>
            <div className='text-sm'>
                <Image src={'/assets/img/cubiertos-blanco.png'} width={100} height={100} alt='logo cocina' className="w-8 h-auto"/>
            </div>

            <nav>       
                <ul className='flex gap-6 text-sm font-medium sm:gap-8'>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#recipes">Recetas</a></li>
                </ul>
            </nav>
            
            <div>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#"><i className="fa-regular fa-envelope"></i></a>
            </div>

        </div>
    )
}

export default Navbar