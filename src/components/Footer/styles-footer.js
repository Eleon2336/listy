import styled from "@emotion/styled";
import { Container, Typography } from "@mui/material";
import { Colors } from "../../theme/theme";

export const FooterContainer = styled(Container)(() => ({
    flex: "1.2",
    flexDirection: "column",
    display: "flex",
    margin: "0 !important",
    padding: "0 !important",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.mediumGrey,
    maxWidth: "none !important"
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.main,
    fontSize: "0.75rem",
    padding: "0.25rem"
}))