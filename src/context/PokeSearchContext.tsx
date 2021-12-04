import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const PokeSearchContext = createContext({});

export const PokeSearchProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20");

        const newPokemons = [];

        for (let i = 0; i < res.data.results.length; i++) {
          let newPokemonRes = await axios.get(res.data.results[i].url);
          newPokemons.push(newPokemonRes.data);
        }

        setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
      } catch (e) {
        console.log(e);
      }
    };

    getPokemons();
  }, []);

  return (
    <PokeSearchContext.Provider
      value={{
        pokemons,
      }}
    >
      {children}
    </PokeSearchContext.Provider>
  );
};
