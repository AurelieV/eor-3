import * as firebase from 'firebase/app'
import firebaseConfig from '@/../config/firebase.config'
import 'firebase/auth'

firebase.initializeApp(firebaseConfig)

export const firebaseAuth = firebase.auth()
