import { Container, List, ListItem, Paper } from "@mui/material";
import { Colors } from "../../theme/theme";
import styled from "@emotion/styled";

//container
export const MainDiv = styled(Container)(() => ({
    flex: "6",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "1rem",
    padding: "0 0 1.5rem !important",
    margin: "0 !important",
    maxWidth: "none !important"
}));

export const ListDiv = styled(Container)(() => ({
    flex: "1",
    padding: "0"
}));

export const DetailsDiv = styled(Container)(() => ({
    flex: "1",
    padding: "0"
}));

export const ListPaper = styled(Paper)(() => ({
    background: Colors.info,
    width: "100%",
    height: "100%"
}));

export const DetailsPaper = styled(Paper)(() => ({
    background: Colors.info,
    width: "100%",
    height: "100%"
}));

export const PokemonList = styled(List)(() => ({
    listStyle: "none",
    padding: "1.5rem"
}));

export const DetailsList = styled(List)(() => ({
    listStyle: "none",
    padding: "1.5rem"
}));

export const TheListItem = styled(ListItem)(() => ({
    padding: "0 0 0.5rem"
}));