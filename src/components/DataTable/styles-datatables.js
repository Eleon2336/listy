import styled from '@emotion/styled';
import { Colors } from '../../theme/theme';
import { 
    TableContainer, 
    Typography 
} from '@mui/material';

export const ContainsTable = styled(TableContainer)(() => ({
    backgroundColor: Colors.lightGrey
}));

export const LabelText = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: "0.88rem",
    [theme.breakpoints.down("md")]: {
        fontSize: "0.75rem"
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.65rem"
    }
}));

export const DataText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.main,
    fontSize: "0.85rem",
    [theme.breakpoints.down("md")]: {
        fontSize: "0.7rem"
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "0.65rem"
    }
}));