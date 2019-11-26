import Head from 'next/head'
import {
  AppBar,
  IconButton,
  Typography,
  Button,
  Toolbar
} from '@material-ui/core'

import { Menu } from '@material-ui/icons'

export default () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <style jsx global>{`
        body, html { 
          background: #f3f3f3;
          height: 100%;
          padding: 0;
          margin: 0;
        }
      `}</style>
      
      <AppBar position="static">
        <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'}}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}