import { Container, Span, Button } from "@/styles/styledComponent/pokemonPageStyled";
import { useEffect, useState } from "react";
import getData from "@/utils/GetData";
import { PokemonCredentials } from "@/interfaces/PokemonCredentials";
import Card from "@/components/Card";
import { Box, Text, HStack, IconButton, Input } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const PokemonPage = ({ pokemonData }: { pokemonData: { name: string, url: string }[] }) => {
    const [pokemons, setPokemons] = useState<PokemonCredentials[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [cardsPerPage, setCardsPerPage] = useState<number>(12);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para o termo de pesquisa

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData();
                setPokemons(response);
            } catch (err) {
                setError('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    const totalPages = Math.ceil(pokemons.length / cardsPerPage);

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <Button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </Button>
            );
        }
        return pageNumbers;
    };

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const filteredPokemons = pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentCards = filteredPokemons.slice(indexOfFirstCard, indexOfLastCard);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Container>
            <Span>
                {error ? (
                    <p>{error}</p>
                ) : (
                    <>
                        <Box textAlign="center" marginBottom="20px">
                            <Input
                                placeholder="Search Pokémon"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                width="300px"
                            />
                        </Box>
                        <Box display="flex" flexWrap="wrap">
                            {currentCards.map((pokemon, index) => (
                                 <Box 
                                 key={index} 
                                 width={{
                                     base: "33.3333%", // 3 por linha em telas pequenas
                                     md: "16.666%",    // 6 por linha em telas médias e maiores
                                 }} 
                                 padding="10px"
                             >
                                 <Card pokemon={pokemon} />
                             </Box>
                            ))}
                        </Box>
                        <Box textAlign="center" marginTop="20px" display="flex" justifyContent="center">
                            <HStack spacing={2}>
                                <IconButton
                                    aria-label="Previous page"
                                    icon={<ChevronLeftIcon />}
                                    onClick={prevPage}
                                    disabled={currentPage === 1}
                                />
                                {renderPageNumbers()}
                                <IconButton
                                    aria-label="Next page"
                                    icon={<ChevronRightIcon />}
                                    onClick={nextPage}
                                    disabled={currentPage === totalPages}
                                />
                            </HStack>
                        </Box>
                    </>
                )}
            </Span>
        </Container>
    );
}

export default PokemonPage;
