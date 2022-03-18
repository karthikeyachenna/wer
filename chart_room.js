const firebaseConfig = {
    apiKey: "AIzaSyA0ARlzUON3e0MUwd-AT-WqGbfCYihJKKo",
    authDomain: "cresk-9d69f.firebaseapp.com",
    databaseURL: "https://cresk-9d69f-default-rtdb.firebaseio.com",
    projectId: "cresk-9d69f",
    storageBucket: "cresk-9d69f.appspot.com",
    messagingSenderId: "389559884951",
    appId: "1:389559884951:web:561093af645ca597acddd2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();


function addRoom(){
    console.log("Room event is generated...")
}