
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { ReactElement } from 'react';
import HeroImg from '../../assets/hero.png'
export const Hero = (): ReactElement => {
    return (
        <Container sx={{ position: 'relative', mt: '70px', mb: '180px' }}>
            <Stack direction='row' justifyContent={'space-between'}  >
                <Box sx={{ flex: 1 }}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', mb: '30px' }}>Sta je Geoporatl?</Typography>
                    <Typography variant='body1' sx={{ fontWeight: 'regular', maxWidth: '563px', mb: "40px" }}>Geo portal je web platforma koja omogućuje pristup geografskim informacijama i podacima putem interaktivnih karata i alata. Korisnici mogu istraživati prostorne podatke, analizirati ih i vizualizirati, olakšavajući donošenje informiranih odluka u različitim područjima.</Typography>
                    <Button variant='contained' sx={{ color: 'white' }}>Geomap</Button>
                </Box>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <img className='hero-img' src={HeroImg}></img>
                </Box>
            </Stack>
            <div className='hero_paper'></div>
        </Container>
    )
}