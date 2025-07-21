import { SignInPage } from '@toolpad/core/SignInPage';
import { useNavigate } from 'react-router';
import { login } from '../services/auth';
import { Button, Typography } from '@mui/material';


export default function SignIn() {
  const navigate = useNavigate();

  function submitButton() {

    return (

      <Button

        type='submit'
        variant='contained'
        size='large'
        fullWidth
        sx={{

          mt:6,
          py:1

        }}

      >
        Ingresar
      </Button>

    )

  }

  function title () {

    return (

      <Typography 
      
        variant='h5'
        textAlign={'center'}
        fontWeight={600}
      
      >

        Sistema de inventario bajo construccion

      </Typography>

    )

  }

  function subtitle () {

    return (

      <Typography
      
        variant='body2'
        gutterBottom
        color='textSecondary'

      >
        Por favor ingrese sus credenciales
      </Typography>

    )

  }

  async function signInHandler(provider: any, formData: any, callbackUrl?: string) {
    try {
      const credentials = new URLSearchParams(formData);
      console.log(await login(credentials));
      navigate(callbackUrl || '/', { replace: true });
      return {};

    } catch (error) {
      return { error: error instanceof Error ? error.message : 'An error occurred' };
    }
    return {};
  }

  return (
    <SignInPage
      providers={[{ id: 'credentials', name: 'Credentials' }]}
      signIn={signInHandler}
      slots={{submitButton, title, subtitle}}
      slotProps={{
        emailField: {
          variant: 'standard',
          name: 'username',
          type: 'text',
          label: 'Usuario',
          placeholder: 'Ingrese su usuario',
          size: "medium"
        },
        passwordField: {
          variant: 'standard',
          label: 'Contraseña',
          placeholder: 'Ingrese su contraseña',
          size: 'medium'
        },
      }}
      sx={{

        '& .MuiContainer-root > .MuiStack-root': {

          justifyContent:'space-evenly',
          minHeight:'70vh'

        }

      }}
    />
  );
}
