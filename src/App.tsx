import PokemonList from './components/PokemonList';
import './App.css'

const App = () => (
  <div className='container'>
    <h1>Pokemons</h1>
    <PokemonList />
  </div>
);

export default App;


/* TECH TASK

Desarrolla una aplicación web que presente una colección, en orden aleatorio, de Pokémon disponibles, ofreciendo detalles como Nombre, Experiencia, Altura, Peso y Habilidades de cada uno.

Incluye una función que permita al usuario actualizar la lista de Pokémon mediante un deslizamiento de la pantalla.
Dado el extenso catálogo, emplea paginación o desplazamiento continuo para una visualización óptima.

Instrucciones adicionales:
•	Crea un repositorio Git dedicado para este proyecto.
•	Utiliza la API REST https://pokeapi.co/docs/v2 o, la versión GraphQL (preferiblemente) en https://pokeapi.co/docs/graphql para obtener la información necesaria.
•	Selecciona un framework JS entre React, Vue o Angular y combínalo con el framework de interfaz de usuario Ionic: https://ionicframework.com/docs/.
•	En lo posible, reutilizá componentes disponibles en Ionic en lugar de crear propios.

Una vez finalizado, responder a este correo con el link a tu repo público (o da permiso para fork a dev@austral.cz), por favor poner en copia a dev@austral.cz 

¡Gracias de antemano!

Saludos,

Franca
*/