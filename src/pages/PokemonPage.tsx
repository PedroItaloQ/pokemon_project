import { Container, Span } from "@/styles/styledComponent/styled";
import { useEffect, useState } from "react";
import getData from "@/utils/GetData";
import { PokemonCredentials } from "@/interfaces/PokemonCredentials";

const PokemonPage: React.FC = () => {
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData({} as PokemonCredentials);
                setPokemons(response.data.results);
            } catch (err) {
                setError('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Span>
                <ul>
                    {pokemons.map((pokemon, index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))}
                </ul>
            </Span>
        </Container>
    )
}

export default PokemonPage;