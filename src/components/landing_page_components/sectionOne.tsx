
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { ReactElement } from 'react';
import SectionOneImg from '../../assets/section1.png'
export const SectionOne = (): ReactElement => {
    return (
        <Container sx={{ position: 'relative', px: '0 !important', mb: '220px', }}>
            <Stack direction='row' gap={5} alignItems={'center'} justifyContent={'space-between'}>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start', padding: '0 60px', }}>
                    <img style={{ objectFit: 'contain', scale: '0.9', borderRadius: '50%', boxShadow: '-1px 4px 224px -52px #FE5F55' }} src={SectionOneImg} />
                </Box>
                <Box sx={{ flex: 3 }}>
                    <Typography variant='h5' sx={{ fontWeight: 500, mb: '50px' }}>Bitnost Geoportala</Typography>
                    <Stack gap={3}>
                        <Stack direction='row' gap={5} justifyContent={'space-between'}>
                            <Typography color='primary' sx={{ fontWeight: 800 }} variant='h4'>1</Typography>
                            <Typography variant='body1'>Geoportali omogućuju korisnicima da lako pristupe različitim geografskim podacima, bez potrebe za specijaliziranim softverom. To čini geografske informacije dostupnijim i pristupačnijim široj publici</Typography>
                        </Stack>
                        <Stack direction='row' gap={5} justifyContent={'space-between'}>
                            <Typography color='primary' sx={{ fontWeight: 800 }} variant='h4'>2</Typography>
                            <Typography variant='body1'>Korisnici mogu koristiti geoportale kako bi bolje razumjeli prostorne odnose i obrazce, što im pomaže da donose informirane odluke u različitim područjima, kao što su urbanističko planiranje, upravljanje resursima, zaštita okoliša, sigurnost i drugi.</Typography>
                        </Stack>
                        <Stack direction='row' gap={5} justifyContent={'space-between'}>
                            <Typography color='primary' sx={{ fontWeight: 800 }} variant='h4'>3</Typography>
                            <Typography variant='body1'>Geoportali pružaju alate za analizu i istraživanje prostornih podataka. Korisnici mogu izvoditi različite analize, izračune i modeliranje kako bi bolje razumjeli složene geografske fenomene.</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}