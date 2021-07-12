var firebaseConfig = {
    apiKey: "AIzaSyAxVV1otvn87-oaZnaGwckXEpYqlHR71iw",
    authDomain: "kwitter-3bb1a.firebaseapp.com",
    databaseURL: "https://kwitter-3bb1a-default-rtdb.firebaseio.com",
    projectId: "kwitter-3bb1a",
    storageBucket: "kwitter-3bb1a.appspot.com",
    messagingSenderId: "290434076406",
    appId: "1:290434076406:web:b578cba92e5915607e26d7",
    measurementId: "G-2L8G5SBLST"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
        window.location="kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user to Hitesh DB",
    });
   window.location="chat.html";  
  }
  


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addroomname(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
   purpose:"adding room names"
   });
localStorage.setItem("room_name",room_name);
window.location="chat_page.html";

}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room name "+Room_names);
    row="<div class='room_name' id="+Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="chat_page.html";
}
function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}