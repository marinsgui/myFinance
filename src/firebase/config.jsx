import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDk08lXUKhUk6NppeezAahqFKJxlL45IcM",
    authDomain: "myfinance-541a7.firebaseapp.com",
    projectId: "myfinance-541a7",
    storageBucket: "myfinance-541a7.appspot.com",
    messagingSenderId: "737583986695",
    appId: "1:737583986695:web:84bb7021c88fb28f1a92a2"
}

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }