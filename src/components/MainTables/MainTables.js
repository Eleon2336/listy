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


const pokeList = [
    "Rattata", "Eevee", "Meowth", "Ditto", "Taillow", "Patrat", "Deerling", "Stufful", "Wooloo", "Lechonk"
];

export default function MainTables(props) {
    const { pathname } = props;
    let [pokemonList, setPokemonList] = useState([]);
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
                        {pokeList.map((pokemon, index) => (
                            <TheListItem key={index}>
                                <ListItemText onClick={() => console.log(pokemonList)}>{pokemon}</ListItemText>
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