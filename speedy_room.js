// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL5D5hSRkPrGpCW_Flf6JAj4E7Rl5kLHY",
    authDomain: "speedy-e6db6.firebaseapp.com",
    databaseURL: "https://speedy-e6db6-default-rtdb.firebaseio.com",
    projectId: "speedy-e6db6",
    storageBucket: "speedy-e6db6.appspot.com",
    messagingSenderId: "649371739578",
    appId: "1:649371739578:web:94241a03d17dea84c86983"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);    

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome "+ user_name + "!";

function addroom() {
       room_name = document.getElementById("room_name").value;

      localStorage.setItem("Roomname",room_name);
  
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
//Start code
console.log("Room_name = " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='next_room(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function next_room(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="speedy_page.html";
}

