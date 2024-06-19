import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
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
      m="10px"
      w={{ base: '120px', sm: '150px', md: '150px' }}
      p="10px"
      // ml={{ base: '2vh', sm: '2.5vh', md: '4.6vh' }}
      position="relative"
      cursor="pointer"
    >
      <Image
        src={pokemon.sprites.front_default || ''}
        alt={pokemon.name}
        width={{ base: '80%', sm: '90%', md: '100%' }}
        height="auto"
      />

      <Text fontSize={{ base: '1em', sm: '1.2em', md: '1.3em' }}>
        {pokemon.type}
      </Text>

      <Text
        fontSize={{ base: '1em', sm: '0.9em', md: '1.3em' }}
      >
        {pokemon.name}
      </Text>
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
