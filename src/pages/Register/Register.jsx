import { signUp } from 'redux/auth/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Register = () => {
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp(newUser));
    setNewUser({ name: '', email: '', password: '' });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const buttonText = 'Sign up';

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                type="text"
                name="name"
                label="Name"
                value={newUser.name}
                onChange={handleChange}
                id="signup-name"
                required
                sx={{ width: '100%', marginBottom: '10px' }}
                InputProps={{
                  inputProps: {
                    pattern:
                      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                    title:
                      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
                  },
                }}
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                title="Email should be valid and include '@'"
                value={newUser.email}
                onChange={handleChange}
                id="signup-email"
                required
                sx={{ width: '100%', marginBottom: '10px' }}
                InputProps={{
                  inputProps: {
                    title: "Email should be valid and include '@'",
                  },
                }}
              />
              <TextField
                type={showPassword ? 'text' : 'password'}
                name="password"
                label="Password"
                value={newUser.password}
                onChange={handleChange}
                id="signup-password"
                required
                sx={{ width: '100%', marginBottom: '10px' }}
                InputProps={{
                  inputProps: {
                    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$',
                    title:
                      'Password should contain at least one lowercase letter(a - z), one uppercase letter(A - Z) and one numeric value(0-9). The total length should be greater than or equal to 8 and less or equal to 20',
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {buttonText.toUpperCase()}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;