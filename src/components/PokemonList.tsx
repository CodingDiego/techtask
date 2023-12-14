import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { Pokemon } from '../types';
import '../styles/PokemonList.css'

const PokemonList: React.FC = () => {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
    const [nextPageUrl, setNextPageUrl] = useState('');
    const [prevPageUrl, setPrevPageUrl] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(currentPageUrl);
            setNextPageUrl(result.data.next);
            setPrevPageUrl(result.data.previous);
            const pokemonArray = await Promise.all(result.data.results.map(async (pokemon: Pokemon) => {
                const pokemonDetails = await axios(pokemon.url);
                return {
                    ...pokemon,
                    ...pokemonDetails.data,
                    id: pokemonDetails.data.id,
                    sprite: pokemonDetails.data.sprites.front_default,
                };
            }));
            setPokemonData(pokemonArray);
        };

        fetchData();
    }, [currentPageUrl]);

    const goToNextPage = () => {
        setCurrentPageUrl(nextPageUrl);
    }

    const goToPrevPage = () => {
        setCurrentPageUrl(prevPageUrl);
    }

    return (
        <>
            <div className='pagination'>
                {prevPageUrl && <button onClick={goToPrevPage}>{`<`}</button>}
                {nextPageUrl && <button onClick={goToNextPage}>{`>`}</button>}
            </div>
            <div className='pagination-content'>
                {pokemonData.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </>
    );
};

export default PokemonList;
