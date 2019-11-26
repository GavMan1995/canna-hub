import { useState } from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
  Link
} from '@material-ui/core'

import Header from '../components/header'

export default () => {
  const [auth, setAuth] = useState('signIn')

  return (
    <div>
      <Header />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', alignContent: 'flex-start', marginTop: '10%', height: '100vh', flexWrap: 'wrap'}}>
        <Typography gutterBottom variant='h3' align='center' style={{width: '100%'}}>{auth === 'signIn' ? 'Signing In' : 'Signing Up'}</Typography>
        <Card style={{maxWidth: 600}}>
          <CardContent>
            <TextField fullWidth label='Email' />
            <TextField style={{width: '50%', display: auth === 'signIn' ? 'none' : ''}} label='First Name' />
            <TextField style={{width: '50%', display: auth === 'signIn' ? 'none' : ''}} label='Last Name' />
            <TextField style={{display: auth === 'signIn' ? 'none' : ''}} fullWidth label='Business Name' />
            <TextField fullWidth label='Password' />
          </CardContent>
          <CardActions style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <Button variant='contained' color='primary' size="small">Sign {auth === 'signIn' ? 'In' : 'Up'}</Button>
          </CardActions>
        </Card>
        <Typography align='center' style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {auth === 'signIn' ? 'Need' : 'Have'} an account?&nbsp;
          <Button color='primary' onClick={() => setAuth(auth === 'signIn' ? 'signUp' : 'signIn')}>Sign {auth === 'signIn' ? 'Up' : 'In'}</Button>
        </Typography>
      </div>
    </div>
  )
}