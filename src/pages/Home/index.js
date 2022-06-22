import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import * as S from './styles';

import RenderPokemon from '../../components/RenderPokemon';

export default function Home() {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    loadPokemon();
  }, []);

  async function loadPokemon() {
    const response = await api.get(`?offset=${page}&limit=20 `);
    setPage(page + 20);
    setPokemons([...pokemons, ...response.data.results]);
  }

  function renderPokemon(item) {
    const {name} = item.item;

    return <RenderPokemon namePokemon={name} />;
  }

  return (
    <S.SafeArea>
      <S.Container>
        <S.BoxTitle>
          <S.Title>Busca Pokemon</S.Title>
          <S.InputSearch
            placeholder="Pesquisar"
            onChangeText={text => setSearch(text)}
          />
        </S.BoxTitle>

        {search != '' &&
          pokemons.map(pokemons => {
            if (pokemons.name == search) {
              return <RenderPokemon namePokemon={search} />;
            }
          })}

        {pokemons.length !== 0 && search === '' && (
          <S.PokemonList
            data={pokemons}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            renderItem={renderPokemon}
            onEndReached={loadPokemon}
            onEndReachedThreshold={0.1}
          />
        )}
      </S.Container>
    </S.SafeArea>
  );
}
