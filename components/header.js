import Head from 'next/head'
import {
  AppBar,
  IconButton,
  Button,
  Toolbar
} from '@material-ui/core'

import { Menu } from '@material-ui/icons'

export default () => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link rel='stylesheet' href='https://cdn.snipcart.com/themes/v3.0.5/default/snipcart.css' />
      </Head>
      <style jsx global>{`
        body, html { 
          background: #f3f3f3;
          height: 100%;
          padding: 0;
          margin: 0;
        }
      `}
      </style>

      <AppBar position='static'>
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center' }}>
          <IconButton edge='start' color='inherit' aria-label='menu'>
            <Menu />
          </IconButton>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>

      <div id='snipcart' data-api-key='ZjJmZGJjODUtOTQ2Mi00MDc2LWEyYmEtYjcxNDg2OWI0NDdkNjM3MTM2ODgyNjA3MjIwMzc4' hidden />
      <script src='https://cdn.snipcart.com/themes/v3.0.5/default/snipcart.js' />
    </div>
  )
}
