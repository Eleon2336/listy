import styled from '@emotion/styled';
import TableContainer from '@mui/material/TableContainer';
import { Colors } from '../../theme/theme';
import { Typography } from '@mui/material';

export const ContainsTable = styled(TableContainer)(() => ({
    backgroundColor: Colors.lightGrey
}));

export const LabelText = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: "bold",
    fontSize: "0.88rem"
}));

export const DataText = styled(Typography)(({ theme }) => ({
    color: theme.palette.info.main
}));