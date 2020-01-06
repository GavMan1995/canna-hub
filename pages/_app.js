import React from 'react'
import App from 'next/app'
import Firebase, { FirebaseContext } from '../Firebase'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return <FirebaseContext.Provider value={new Firebase()}><Component {...pageProps} /></FirebaseContext.Provider>
  }
}

export default MyApp
