import { DetailsDiv, DetailsList, DetailsPaper, ListDiv, ListPaper, MainDiv, PokemonList, TheListItem } from "./styles-maintables";

export default function MainTables() {
    return (
        <MainDiv>
            <ListDiv>
                <ListPaper>
                    <PokemonList>
                        <TheListItem>Rattata</TheListItem>
                        <TheListItem>Eevee</TheListItem>
                        <TheListItem>Meowth</TheListItem>
                        <TheListItem>Ditto</TheListItem>
                        <TheListItem>Taillow</TheListItem>
                        <TheListItem>Patrat</TheListItem>
                        <TheListItem>Deerling</TheListItem>
                        <TheListItem>Stufful</TheListItem>
                        <TheListItem>Wooloo</TheListItem>
                        <TheListItem>Lechonk</TheListItem>
                    </PokemonList>
                </ListPaper>
            </ListDiv>

            <DetailsDiv>
                <DetailsPaper>
                    <DetailsList>
                        <TheListItem><strong>Name: </strong>Rattata</TheListItem>
                        <TheListItem><strong>DexNo: </strong>19</TheListItem>
                        <TheListItem><strong>Type: </strong>normal</TheListItem>
                        <TheListItem><strong>Egg-Group: </strong>field</TheListItem>
                        <TheListItem><strong>Base-Stat: </strong>253</TheListItem>
                        <TheListItem><strong>Abilities: </strong>run away, guts</TheListItem>
                    </DetailsList>
                </DetailsPaper>
            </DetailsDiv>
        </MainDiv>
    );
}