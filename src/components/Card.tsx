import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react'
import { PokemonCredentials } from "@/interfaces/PokemonCredentials";

interface CardProps {
  pokemon: PokemonCredentials;
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <Box
      bg="white"
      borderRadius="10px"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
      overflow="hidden"
      textAlign="center"
      margin="10px"
      width="150px"
      padding="10px"
      marginLeft="4.5vh"
      position="relative" // Permite que o número fique posicionado absolutamente
    >
      <Image src={pokemon.sprites.front_default || ''} alt={pokemon.name} width="100%" height="auto" />
      <Text fontSize="1.2em" color="#333">{pokemon.name}</Text>
      <Box
        position="absolute"
        top="5px"
        left="5px"
        width="25px"
        height="25px"
        backgroundColor="#f00"
        borderRadius="50%"
        color="#fff"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="0.8em"
      >
        {pokemon.id}
      </Box>
    </Box>
  );
}

export default Card;
