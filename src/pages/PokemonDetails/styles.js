import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #22272e;
  align-items: center;
  justify-content: center;
`;

export const BoxDetails = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  height: 80%;
  align-items: center;
  justify-items: center;
`;

export const BoxItensDetails = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-left: 25px;
`;

export const DescriptionDetails = styled.Text`
  color: #5c4033;
  font-weight: bold;
  font-size: 24px;
`;

export const PokemonImage = styled.Image`
  width: 90%;
  height: 65%;
`;
