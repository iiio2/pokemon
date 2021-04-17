import { Fragment } from 'react';

const PokemonList = ({ pokemon }) => {
  return (
    <Fragment>
      <ul>
        {pokemon.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default PokemonList;
