import DataTable from "../DataTable/DataTable";
import { 
    useState, 
    useEffect 
} from "react";
import { 
    DetailsDiv, 
    ListDiv, 
    ListPaper, 
    MainDiv, 
    PokemonList, 
    TheListItem, 
    ListItemText 
} from "./styles-maintables";

export default function MainTables(props) {
    const [pokemonList, setPokemonList] = useState([{"national-dex-number": 1, "name": "Select a type for a list"}]);

    const { pathname } = props;
    let url = '';
    switch (pathname) {
        case '/normal':
          url = '/data/normalPokemon.json';
          break;
        case '/grass':
          url = '/data/grassPokemon.json';
          break;
        case '/fire':
          url = '/data/firePokemon.json';
          break;
        case '/water':
          url = '/data/waterPokemon.json';
          break;
        default:
            url = '';
            break;
    }

    useEffect(() => {
        if (url) {
            fetch(url, {headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }
                return response.json();
            })
            .then(resultsData => {
                setPokemonList(resultsData);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            })
        }
        console.log("useEffect ran, love");
    }, [pathname, url])

    return (
        <MainDiv>
            <ListDiv>
                <ListPaper>
                    <PokemonList>
                        {pokemonList.map((pokemon, index) => (
                            <TheListItem key={pokemon["national-dex-number"]}>
                                <ListItemText>
                                    {pokemon.name}
                                </ListItemText>
                            </TheListItem>
                        ))}
                    </PokemonList>
                </ListPaper>
            </ListDiv>
            <DetailsDiv>
                <DataTable />
            </DetailsDiv>
        </MainDiv>
    );
}