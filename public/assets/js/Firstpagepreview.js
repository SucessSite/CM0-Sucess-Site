const firebaseConfig = {
    apiKey: "AIzaSyD6vhkyBFMLTM2Fxc0M0aTo2TvO4YcKbGg",
    authDomain: "vill-c2671.firebaseapp.com",
    projectId: "vill-c2671",
    storageBucket: "vill-c2671.appspot.com",
    messagingSenderId: "545131231563",
    appId: "1:545131231563:web:30455db520dbe1aa4210ce",
    measurementId: "G-614BM0ZLB6"
  };

const internships = []
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let x = 1
db.collection("Internships").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        internships.push(doc.data());
        // console.log(`${doc.id} => ${doc.data()["Description"]}`); //Object.values(doc.data())
        if (x == 1){
            document.getElementById("Nameit1").textContent = doc.data()["Name"];
            document.getElementById("Descriptit1").textContent = doc.data()["Description"];
        }
        if (x == 2){
            document.getElementById("Nameit2").textContent = doc.data()["Name"];
            document.getElementById("Descriptit2").textContent = doc.data()["Description"];
        }
        x = x + 1
    });
    
})

