// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif', // Zamenite 'Font Name' sa imenom fonta sa Google Fonts
    },
    palette: {
        primary: {
            main: '#7A9E9F', // Promenite ovu vrednost na vašu željenu primarnu boju
        },
        secondary: {
            main: '#FE5F55', // Promenite ovu vrednost na vašu željenu sekundarnu boju
        },
    },
    // Dodajte dodatne stilove po potrebi
});

export default theme;
