import Container from '@mui/material/Container';
import { ReactNode } from 'react'


type Layout_Type = {
    children: ReactNode
}
export const Layout = ({ children }: Layout_Type) => {
    return (
        <Container width='100%'>
            {children}
        </Container>
    )
}