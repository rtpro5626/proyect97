var firebaseConfig = {
    apiKey: "AIzaSyDt7KhAmwYMPeMLgpsYRtRiv63Nmr5tG3w",
    authDomain: "tinke-d2bfc.firebaseapp.com",
    databaseURL: "https://tinke-d2bfc-default-rtdb.firebaseio.com",
    projectId: "tinke-d2bfc",
    storageBucket: "tinke-d2bfc.appspot.com",
    messagingSenderId: "106987243987",
    appId: "1:106987243987:web:4a9f4a62a2a9082eea4726"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username = localStorage.getItem("usuario")
  room_name = localStorage.getItem("room_name")
  document.getElementById("user_name").innerHTML="hola"+username
  function addRoom(){
    room_name=document.getElementById("room_name").value
     firebase_database().ref("/").child(room_name.update({
        purpose:"añadiendo nombre de sala"
     })) 
     localStorage.setItem("room_name",room_name)
     window.location.replace("tinke_page.html")    
    }
    function logoutO(){
        localStorage.removeItem("usuario")
        localStorage.removeItem("room_name")
        window.location.replace("index.html")
    }