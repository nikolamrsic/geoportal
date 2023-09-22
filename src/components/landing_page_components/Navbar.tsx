import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
const style = {
    color: 'black'
}

const Style_Container = {
    padding: '7px 15px',
    top: '10px;',
}

export const Navbar = (): ReactElement => {
    return (
        <Container sx={Style_Container}>
            <Stack direction='row' justifyContent={'space-between'}>
                <Stack direction='row' gap={3}>
                    <Button variant='text' sx={style} >Pocetna</Button>
                    <Button variant='text' sx={style} >Aneksi</Button>
                    <Button variant='text' sx={style} >Geoprtal</Button>
                    <Button variant='text' sx={style} >Informacije</Button>
                </Stack>
                <Link to='/geoportal'>
                    <Button variant='contained' size="large" sx={{ ...style, color: 'white !important' }} >Geomap</Button>
                </Link>
            </Stack>
        </Container>
    )
}