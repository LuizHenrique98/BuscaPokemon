import React, {useEffect, useState} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';

import api from '../../services/api';

import * as S from './styles';

export default function PokemonDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const [height, setheight] = useState('');
  const [weight, setWeight] = useState('');
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, []);

  useEffect(() => {
    async function getPokemonDetails() {
      const response = await api.get(`${route.params.name}`);
      setAbilities(response.data.abilities);
      setheight(response.data.height);
      setWeight(response.data.weight);
      setImage(response.data.sprites.front_default);
    }
    getPokemonDetails();
  }, []);

  return (
    <S.Container>
      <S.BoxDetails>
        <S.BoxItensDetails>
          <S.Title>Altura:</S.Title>
          <S.DescriptionDetails> {height} </S.DescriptionDetails>
        </S.BoxItensDetails>

        <S.BoxItensDetails>
          <S.Title>Peso:</S.Title>
          <S.DescriptionDetails> {weight} </S.DescriptionDetails>
        </S.BoxItensDetails>

        <S.Title>Habilidades:</S.Title>
        {abilities.map((ability, key) => {
          return (
            <S.DescriptionDetails key={key}>
              {ability.ability.name}
            </S.DescriptionDetails>
          );
        })}

        <S.PokemonImage source={{uri: image}} />
      </S.BoxDetails>
    </S.Container>
  );
}
