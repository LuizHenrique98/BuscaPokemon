import React, {useEffect, useState} from 'react';

import * as S from './styles';

import api from '../../services/api';

import {useNavigation} from '@react-navigation/native';

export default function RenderPokemon({namePokemon}) {
  const navigation = useNavigation();
  const [image, setImage] = useState();

  useEffect(() => {
    async function loadImage() {
      const response = await api.get(`${namePokemon}`);
      setImage(response.data.sprites.front_default);
    }
    loadImage();
  }, []);

  return (
    <S.ButtonDetails
      onPress={() =>
        navigation.navigate('PokemonDetails', {
          name: namePokemon,
        })
      }>
      <S.ButtonText> {namePokemon} </S.ButtonText>
      <S.PokemonImage
        source={{
          uri: image,
        }}
      />
    </S.ButtonDetails>
  );
}
