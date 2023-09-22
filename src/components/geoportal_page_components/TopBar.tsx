import { Container, Box, Stack, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/logo.svg'

type ToBar_Type = {
    handleSideBar: () => void
}
export default function TopBar({ handleSideBar }: ToBar_Type) {
    return (
        <Container maxWidth={false} disableGutters={true} sx={{ position: 'absolute', zIndex: '55', padding: '15px 0' }}>
            <Stack direction='row' justifyContent="center">
                <Box component={'div'} sx={{
                    width: '100%', border: 'solid 1px rgba(168, 168, 168, 0.20)', boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
                    maxWidth: 'calc(100vw - 55px)', backgroundColor: 'white', padding: '7px 15px', borderRadius: '15px'
                }}>
                    <Stack direction='row' justifyContent={'space-between'} sx={{ width: '100%' }}>
                        <img style={{ width: '80px' }} src={Logo} />
                        <IconButton onClick={handleSideBar}>
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}