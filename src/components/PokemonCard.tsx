import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg } from '@ionic/react';
import { PokemonProps } from '../types';
import '../styles/PokemonCard.css'

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => (
    <IonCard className="ion-card">
        <IonCardHeader className="ion-card-header">
            <IonCardTitle className="ion-card-title">{pokemon.name}</IonCardTitle>
            <IonImg src={pokemon.sprite} className='pokemon-image'></IonImg>
            <IonCardSubtitle className="ion-card-subtitle">Experiencia: {pokemon.base_experience}</IonCardSubtitle>
            <IonCardSubtitle className="ion-card-subtitle">Altura: {pokemon.height}</IonCardSubtitle>
            <IonCardSubtitle className="ion-card-subtitle">Peso: {pokemon.weight}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className="ion-card-content">
            habilidades:
            <ul>
                {pokemon.abilities && pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </IonCardContent>
    </IonCard>
);

export default PokemonCard;
