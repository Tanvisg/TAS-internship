import { Dialog, Box, TextField, Typography, Button, styled } from '@mui/material'
import { useState } from 'react';

const Component = styled(Box)`
    height: 82vh;
    width: 90vh;
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 30px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Image = styled(Box)`
    background: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    background-color: #2874f0;
    height: 83%;
    width: 28%;
    padding: 46.3px 35px;
    & > p, & h5 {
        color: #fff;
        font-weight: 600;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;

`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    box-shadow: 0 2px 4px 0 rgb(0, 0, 0, 20%);
    height: 48px;
    border-radius: 2px;

`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`;

const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlists and Recommendation"
    },
    signUp: {
        view: 'signUp',
        heading: "Looks like you'er new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signUpInitialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
}

const LoginDialog = ({open, setOpen}) =>{

    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signUp, setSignUp] = useState(signUpInitialValues);

    const handleClose = () =>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignUp = () => {
        toggleAccount(accountInitialValues.signUp);
    }

    const onInputChange = (e) => {
     setSignUp({...signUp, [e.target.name]: e.target.value});
     console.log(signUp);   
    }

    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
            <Component>
                <Box style={{display: 'flex', height: '100%'}}> 
                        <Image>
                            <Typography variant='h5'>{account.heading}</Typography>
                            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                        </Image>
                    {
                        account.view === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" label="Enter Email/Mobile Number"/>
                            <TextField variant="standard" label="Enter Password" />
                            <Text>By continuing, you agree Flipkart's Terms of Use and Privacy Policy</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{textAlign: 'center'}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignUp()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                    :
                        <Wrapper>
                            <TextField variant="standard" label="Enter FirstName" onChange={(e) => onInputChange(e)}    name='firstName' style={{paddingTop: 5, paddingLeft: 0}}/>
                            <TextField variant="standard" label="Enter LastName" onChange={(e) => onInputChange(e)} name='lastName' style={{paddingTop: 5, paddingLeft: 0}}/>
                            <TextField variant="standard" label="Enter UserName" onChange={(e) => onInputChange(e)} name='userName' style={{paddingTop: 5, paddingLeft: 0}}/>
                            <TextField variant="standard" label="Enter Email" onChange={(e) => onInputChange(e)} name='email' style={{paddingTop: 5, paddingLeft: 0}}/>
                            <TextField variant="standard" label="Enter Password" onChange={(e) => onInputChange(e)} name='password' style={{paddingTop: 5, paddingLeft: 0}}/>
                            <TextField variant="standard" label="Enter Mobile Number" onChange={(e) => onInputChange(e)} name='phone' style={{paddingTop: 5, paddingLeft: 0}}/>
                            <LoginButton>Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
};

export default LoginDialog;