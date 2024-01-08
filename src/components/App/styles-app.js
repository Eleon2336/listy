import { Container, Typography } from "@mui/material"
import styled from "@emotion/styled";


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

export const HeaderText = styled(Typography)(() => ({
    padding: "1.2rem",
}));

export const FooterContainer = styled(Container)(() => ({
    flex: "1.2",
    display: "flex",
    margin: "0 !important",
    padding: "0 !important",
    justifyContent: "center",
    background: "gray",
    maxWidth: "none !important"
}));