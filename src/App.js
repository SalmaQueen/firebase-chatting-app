import React from 'react'
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  // your config
  apiKey: "AIzaSyCjVtPUJMRRDIvkJKMfhO67-KMqYkfaA-4",
  authDomain: "chat-app-9140d.firebaseapp.com",
  projectId: "chat-app-9140d",
  storageBucket: "chat-app-9140d.appspot.com",
  messagingSenderId: "547428593406",
  appId: "1:547428593406:web:ee88e2154764a54e11bfaf",
  measurementId: "G-T5QGW65GRJ"
})

const auth=firebase.auth();

const firestore=firebase.firestore();



function App() {
  const [user]=useAuthState(auth);
  return (
    <div className="App">
      <header>

      </header>
      <section>
        {
        user?<ChatRoom/>:<SignIn/>
        }
      </section>
     
    </div>
  );
}

function SignIn(){
  const signInWithGoogle=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }
  return(
    <button onClick={signInWithGoogle}>Sign In with Google</button>
  )
}

function SignOut(){
  return auth.currentUser &&(
    <button onClick={()=>auth.signOut()}>Sign Out</button>
  )

}

function ChatRoom(){
  
  return(

  )
}

export default App;
