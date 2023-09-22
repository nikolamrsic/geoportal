
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { ReactElement } from 'react';
import MapIcon from '../../assets/map.svg';
import ChartIcon from '../../assets/chart.svg';
import HomeIcon from '../../assets/home.svg';
export const SectionTwo = (): ReactElement => {
    return (
        <Container sx={{ position: 'relative', mt: '70px', mb: '180px' }}>
            <Stack direction='row' alignItems={'basseline'} justifyContent={'space-evenly'} >
                <Box>
                    <Stack justifyContent={'center'} alignItems={'center'} gap="23px">
                        <img style={{ width: '85px', aspectRatio: '1/1' }} src={MapIcon}></img>
                        <Typography sx={{ maxWidth: '220px' }} align='center' variant='h6' >Upravljanje prosornim podacima</Typography>
                    </Stack>
                </Box>
                <Box >
                    <Stack justifyContent={'center'} alignItems={'center'} gap="23px">
                        <img style={{ width: '85px', aspectRatio: '1/1' }} src={ChartIcon}></img>
                        <Typography sx={{ maxWidth: '220px' }} align='center' variant='h6' >Pristupne informacije</Typography>
                    </Stack>
                </Box>
                <Box >
                    <Stack justifyContent={'center'} alignItems={'center'} gap="23px">
                        <img style={{ width: '85px', aspectRatio: '1/1' }} src={HomeIcon}></img>
                        <Typography align='center' variant='h6' >Zastita sredine</Typography>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}