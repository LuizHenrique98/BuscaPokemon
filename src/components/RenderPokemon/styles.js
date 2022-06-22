import styled from 'styled-components/native';

export const ButtonDetails = styled.TouchableOpacity`
  margin-top: 10px;
  border-radius: 10px;
  flex-direction: row;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  margin-left: 10px;
  font-weight: bold;
`;

export const PokemonImage = styled.Image`
  width: 50px;
  height: 50px;
`;
