import * as app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyCMfcATZOlZyJ2azhNM92GHXSESu7xoFEk',
  authDomain: 'tranqil-co.firebaseapp.com',
  databaseURL: 'https://tranqil-co.firebaseio.com',
  projectId: 'tranqil-co',
  storageBucket: 'tranqil-co.appspot.com',
  messagingSenderId: '951958833702',
  appId: '1:951958833702:web:3330d84dd1898edf7434e7',
  measurementId: 'G-ZNZK8CWKJV'
}

class Firebase {
  constructor () {
    if (!app.apps.length) {
      app.initializeApp(config)
    }
    this.fieldValue = app.firestore.FieldValue
    this.emailAuthProvider = app.auth.EmailAuthProvider
    this.auth = app.auth()
    this.db = app.firestore()
  }

  createUserWithEmailAndPassword = (email, password) => { this.auth.createUserWithEmailAndPassword(email, password) }

  signInWithEmailAndPassword = (email, password) => { this.auth.signInWithEmailAndPassword(email, password) }

  signOut = () => this.auth.signOut()

  passwordReset = email => this.auth.sendPasswordResetEmail(email)

  sendEmailVerification = () => {
    this.auth.currentUser.sendEmailVerification({
      url: process.env.CONFIRMATION_EMAIL_REDIRECT
    })
  }

  passwordUpdate = password => { this.auth.currentUser.updatePassword(password) }

  onAuthUserListener = (next, fallback) => {
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data()
            if (!dbUser.roles) {
              dbUser.roles = {}
            }

            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            }
            next(authUser)
          })
      } else {
        fallback()
      }
    })
  }

  users = () => this.db.collection('users')
  user = id => this.db.doc(`users/${id}`)

  products = () => this.db.collection('products')
  product = id => this.db.doc(`users/${id}`)

  stores = () => this.db.collection('/stores')
  store = id => this.db.doc(`/stores/${id}`)
}

export default Firebase
