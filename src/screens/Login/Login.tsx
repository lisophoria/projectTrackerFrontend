import { ChangeEvent, FC, useState } from 'react';
import { Box, TextField } from '@mui/material';
import AbstractBlockWithButtons from 'comopnents/abstract/AbstractBlockWithButtons';
import { ButtonTypes } from 'comopnents/ui/Button/Button.types';
import { IUserCredentials, IUserWithPassword } from 'store/model/user';
import image from 'assets/img/background-image.jpg';
import { useLoginMutation, useRegisterMutation } from 'store/api/login.api';
import { useNavigate } from 'react-router-dom';

enum FormType {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}

const Login: FC = () => {
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const [formType, setFormType] = useState<FormType>(FormType.LOGIN);
  const [registerForm, setRegisterForm] = useState<IUserWithPassword>({});
  const [loginForm, setLoginForm] = useState<IUserCredentials>(
    {
      email: 'victor.astakhov@gmail.com',
      password: '12345',
    },
  );

  const onRegisterFormChange = (field: string, value: string) => {
    setRegisterForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onLoginFormChange = (field: string, value: string) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onRegisterClick = async () => {
    await register(registerForm);
    navigate('/');
  };

  const onLoginClick = async () => {
    await login(loginForm);
    navigate('/');
  };

  const FormButtonsByFormType = {
    [FormType.LOGIN]: [
      {
        styleType: ButtonTypes.PRIMARY,
        onClick: onLoginClick,
        title: 'login',
      },
      {
        styleType: ButtonTypes.SECONDARY,
        onClick: () => setFormType(FormType.REGISTER),
        title: 'don\'t have account?',
      },
    ],
    [FormType.REGISTER]: [
      {
        styleType: ButtonTypes.PRIMARY,
        onClick: onRegisterClick,
        title: 'register',
      },
      {
        styleType: ButtonTypes.SECONDARY,
        onClick: () => setFormType(FormType.LOGIN),
        title: 'wanna login?',
      },
    ],
  };
  
  const HeadingByFormType = {
    [FormType.LOGIN]: 'Login',
    [FormType.REGISTER]: 'Create account',
  };

  return (
    <Box sx={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
    }}
    >
      <AbstractBlockWithButtons
        sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
        width={500}
        heading={HeadingByFormType[formType]}
        buttons={FormButtonsByFormType[formType]}
      >
        {formType === FormType.LOGIN && (
          <Box
            component={'form'}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <TextField
              sx={{ width: '100%' }}
              label={'email'}
              variant={'outlined'}
              value={loginForm.email}
              onInput={(e: ChangeEvent<HTMLInputElement>) => onLoginFormChange('email', e.target.value)}
            />
            <TextField
              sx={{ width: '100%' }}
              label={'password'}
              variant={'outlined'}
              type={'password'}
              value={loginForm.password}
              onInput={(e: ChangeEvent<HTMLInputElement>) => onLoginFormChange('password', e.target.value)}
            />
          </Box>
        )}
        {formType === FormType.REGISTER && (
          <Box
            component={'form'}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <TextField
              sx={{ width: '100%' }}
              label={'email'}
              variant={'outlined'}
              value={registerForm.email}
              onInput={(e: ChangeEvent<HTMLInputElement>) => onRegisterFormChange('email', e.target.value)}
            />
            <TextField
              sx={{ width: '100%' }}
              label={'password'}
              variant={'outlined'}
              type={'password'}
              value={registerForm.password}
              onInput={(e: ChangeEvent<HTMLInputElement>) => onRegisterFormChange('password', e.target.value)}
            />
            <TextField
              sx={{ width: '100%' }}
              label={'firstname'}
              variant={'outlined'}
              value={registerForm.firstname}
              onInput={(e: ChangeEvent<HTMLInputElement>) => onRegisterFormChange('firstname', e.target.value)}
            />
            <TextField
              sx={{ width: '100%' }}
              label={'lastname'}
              variant={'outlined'}
              value={registerForm.lastname}
              onInput={(e: ChangeEvent<HTMLInputElement>) => onRegisterFormChange('lastname', e.target.value)}
            />
          </Box>
        )}
      </AbstractBlockWithButtons>
    </Box>
  );
};

export default Login;
