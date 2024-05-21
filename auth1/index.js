
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";




    const firebaseConfig = {
        apiKey: "AIzaSyBiSywO5Sxe0nh3orMmyP0oR5Ih_zYwxRs",
        authDomain: "ml12-d8566.firebaseapp.com",
        projectId: "ml12-d8566",
        storageBucket: "ml12-d8566.appspot.com",
        messagingSenderId: "963331796729",
        appId: "1:963331796729:web:598f1093beaabf5c9a3c28"
      };
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
var b1=document.getElementById('submit2');
const auth = getAuth(app);
b1.addEventListener("click",()=>
{
    var email=document.getElementById('name1').value;
    var password=document.getElementById('pass1').value;
   

    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
     const user = userCredential.user;
       console.log("create succesfully"+user);

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        console.log("create not succesfully");
      });
})

var b2=document.getElementById('submit');
b2.addEventListener("click",()=>
{
    var email=document.getElementById('name').value;
    var password=document.getElementById('pass').value;
   
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        console.log("user  login sucesssfully"+user);
     window.location.href = "home.html";
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("user login unsuceessfully");
        console.log(errorCode,errorMessage);
      });
   
});

var b4=document.getElementById('submit4');
b4.addEventListener("click",()=>
{
    
    
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
       
        const user = result.user;
     
        console.log(user);
        window.alert("Signed in with Google");
        window.location.href = "home.html";
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        
        console.log(errorCode, errorMessage);
        // ...
      });

   
});
