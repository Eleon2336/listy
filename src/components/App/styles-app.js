import styled from "@emotion/styled";
import { 
    Container, 
    Typography 
} from "@mui/material"

//container
export const AppContainer = styled(Container)(() => ({
    display: "flex",
    margin: "0",
    padding: "0 !important",
    minHeight: "100dvh",
    minWidth: "100dvw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}));

export const HeaderContainer = styled(Container)(() => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "0 !important",
    padding: "0 !important",
    maxWidth: "none !important"
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
    padding: "1.2rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textShadow: "2px 2px 2px #c2c2c2",
    [theme.breakpoints.down("md")]: {
        fontSize: "1rem"
    }
}));