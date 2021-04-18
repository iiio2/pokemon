import { Fragment } from 'react';

const PokemonList = ({ pokemon }) => {
  return (
    <Fragment>
      <div className='row'>
        {pokemon.map((poke) => (
          <div key={poke.name} className='col-sm-3'>
            <div className='card'>
              <h5 className='text-center'>{poke.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default PokemonList;
