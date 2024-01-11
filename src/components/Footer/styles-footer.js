import styled from "@emotion/styled";
import { Colors } from "../../theme/theme";
import { 
    Container, 
    Typography 
} from "@mui/material";

export const FooterContainer = styled(Container)(({ theme }) => ({
    flex: "1.2",
    flexDirection: "column",
    display: "flex",
    margin: "0 !important",
    padding: "0 !important",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.mediumGrey,
    maxWidth: "none !important",
    [theme.breakpoints.down("sm")]: {
        flex: "1"
    }
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.main,
    fontSize: "0.75rem",
    padding: "0.25rem",
    [theme.breakpoints.down("md")]: {
        fontSize: "0.65rem",
        padding: "0.15rem"
    }
}))