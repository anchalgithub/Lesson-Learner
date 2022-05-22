import  firebase from 'firebase';
require ('@firebase/firestore')

 
  var firebaseConfig = {
    apiKey: "AIzaSyAkMRQm14g2gt35e-lFS-GFeuZzg6FL578",
    authDomain: "class-40-9fcf5.firebaseapp.com",
    databaseURL: "https://class-40-9fcf5.firebaseio.com",
    projectId: "class-40-9fcf5",
    storageBucket: "class-40-9fcf5.appspot.com",
    messagingSenderId: "308504041773",
    appId: "1:308504041773:web:839c513600579d04a05ba4"
  };
  

  firebase.initializeApp(firebaseConfig); 
 

  export default firebase.firestore();