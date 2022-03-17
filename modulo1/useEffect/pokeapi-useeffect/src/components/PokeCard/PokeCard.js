import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = ({ pokemon }) => {
  const [poke, setPoke] = useState([]);

  useEffect( () => {
    pegaPokemon(pokemon);
  }, []);

  useEffect(()=>{
    pegaPokemon(pokemon)
  },[pokemon]);

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPoke(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

    return (
      <div>
        <p>{poke.name}</p>
        <p>{poke.weight} Kg</p>
        {poke.types && <p>{poke.types[0].type.name}</p>}
        {poke.sprites && (
          <img src={poke.sprites.front_default} alt={poke.name} />
        )}
      </div>
    );
  }

export default PokeCard;
