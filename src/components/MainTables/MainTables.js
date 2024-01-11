import DataTable from "../DataTable/DataTable";
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

export default function MainTables() {
    return (
        <MainDiv>
            <ListDiv>
                <ListPaper>
                    <PokemonList>
                        {pokeList.map((pokemon, index) => (
                            <TheListItem key={index}>
                                <ListItemText>{pokemon}</ListItemText>
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