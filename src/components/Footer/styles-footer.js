import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { Colors } from "../../theme/theme";

export const FooterContainer = styled(Container)(() => ({
    flex: "1.2",
    display: "flex",
    margin: "0 !important",
    padding: "0 !important",
    justifyContent: "center",
    background: Colors.mediumGrey,
    maxWidth: "none !important"
}));