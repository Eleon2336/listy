import "./main.css";
import { Container, List, ListItem, Paper, Typography } from "@mui/material";

export default function Main() {
    return (
        <Container className="mainDiv">
            <Container className="listDiv">
                <Paper className="listContainer">
                    <List className="pokeList">
                        <ListItem className="listItem">Rattata</ListItem>
                        <ListItem className="listItem">Eevee</ListItem>
                        <ListItem className="listItem">Meowth</ListItem>
                        <ListItem className="listItem">Ditto</ListItem>
                        <ListItem className="listItem">Taillow</ListItem>
                        <ListItem className="listItem">Patrat</ListItem>
                        <ListItem className="listItem">Deerling</ListItem>
                        <ListItem className="listItem">Stufful</ListItem>
                        <ListItem className="listItem">Wooloo</ListItem>
                        <ListItem className="listItem">Lechonk</ListItem>
                    </List>
                </Paper>
            </Container>

            <Container className="detailsDiv">
                <Paper className="detailsContainer">
                    <List className="detailsList">
                        <ListItem className="listItem"><strong>Name: </strong>Rattata</ListItem>
                        <ListItem className="listItem"><strong>DexNo: </strong>19</ListItem>
                        <ListItem className="listItem"><strong>Type: </strong>normal</ListItem>
                        <ListItem className="listItem"><strong>Egg-Group: </strong>field</ListItem>
                        <ListItem className="listItem"><strong>Base-Stat: </strong>253</ListItem>
                        <ListItem className="listItem"><strong>Abilities: </strong>run away, guts</ListItem>
                    </List>
                </Paper>
            </Container>
        </Container>
    );
}