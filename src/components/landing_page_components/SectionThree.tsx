
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { ReactElement } from 'react';


export const SectionThree = (): ReactElement => {
    return (
        <Container sx={{ position: 'relative', px: '0 !important', mb: '220px', }}>

            <Box sx={{ background: '#393E76', padding: '85px 50px', borderRadius: '20px' }}>
                <Stack direction='column' items={"center"} justifyContent={"center"} gap={3}>
                    <Typography variant='body1' align="center" sx={{ color: 'white' }}>Zaronite u svijet geografskih informacija i otkrijte mnoštvo mogućnosti kroz naš interaktivni Geoportal! Pružamo vam pristup raznolikim prostornim podacima, alatima za analizu i vizualizaciju te podršku u donošenju informiranih odluka. Istražite, analizirajte i stvarajte uz Geoportal - vaš ključ za razumijevanje prostornih obrazaca i osnaživanje održivog razvoja</Typography>
                    <Button sx={{ display: 'block', width: 'fit-content', mx: 'auto' }} variant='contained' size='large'>Istrazi</Button>
                </Stack>
            </Box>

        </Container>
    )
}