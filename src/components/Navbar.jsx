import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Navbar = () => {

    return (
        <div className='fixed top-0 left-0 w-full z-50 flex items-center justify-between w-full px-12 py-4 sm:px-10  text-white'>
            <div className='text-sm'>
                <Image src={'/assets/img/cubiertos-blanco.png'} width={100} height={100} alt='logo cocina' className="w-8 h-auto"/>
            </div>

            <nav>       
                <ul className='flex gap-6 text-base font-medium sm:gap-8'>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#recipes">Recetas</a></li>
                </ul>
            </nav>
            
            <div className='flex gap-4'>
                <a href="#"><FaInstagram className="text-2xl" /></a>
                <a href="#"><FaWhatsapp className="text-2xl" /></a>
                <a href="#"><HiOutlineMail className="text-2xl" /></a>
            </div>

        </div>
    )
}

export default Navbar