'use client';
import CardsGrid from '@/components/CardsGrid';
import Hero from '@/components/Hero';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    
    const handleGetItems = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/recipes?limit=0')
            const data = response.data.recipes;
            console.log(data)
            
            setItems(data);
            setLoading(false);
        } catch (error) {
            console.log('Hubo un error', error);
            setError(true);
            setErrorMsg('Hubo en error');
        }
    }

    useEffect(() => {
        handleGetItems();
    }, []);

    return (
        <div>
            <Hero />
            <section className='flex justify-center items-center'>
                {!loading && <CardsGrid items={items} title='Recetas destacadas'/>}
                {loading && <div className='w-full min-h-screen flex items-center justify-center'><p className='text-[1.5em] font-[Philosopher]'>
                    Loading...</p></div>}
                {error !== '' && <div>{errorMsg}</div>}
            </section>
        </div>
    )   
}

export default HomeContainer