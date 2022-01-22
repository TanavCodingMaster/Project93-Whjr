const firebaseConfig = {
      apiKey: "AIzaSyDSJszFQglYVQlquCTm6l3xhxFfgCZt4yU",
      authDomain: "kwitterapp-4fdab.firebaseapp.com",
      databaseURL: "https://kwitterapp-4fdab-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-4fdab",
      storageBucket: "kwitterapp-4fdab.appspot.com",
      messagingSenderId: "1055668249854",
      appId: "1:1055668249854:web:4ca711c72681884f49f1af",
      measurementId: "G-Y9GZCVEFL5"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
