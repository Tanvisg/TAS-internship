import { Box, Button, Typography, styled } from '@mui/material'
import {ShoppingCart} from '@mui/icons-material';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0, 3%, 0, auto;
    & > button, & > p, & > div{
        margin-right: 40px;
        align-items: center;
    }
`;

const Container = styled(Box)`
    display: flex;
`;

const LoginButton = styled(Button)`
    color: #2974f0;
    background-color: #FFF;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`;

const CustomButtons = () =>{
    return(
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>

            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    )
}

export default CustomButtons;