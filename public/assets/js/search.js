
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
console.log(queryString);

document.getElementById("querysearch").addEventListener("click", function(){
    e.preventDefault();
    var query = document.getElementById("queryval").value;
    window.location.href = "search.html?" + query;
});

document.getElementById("queryval").addEventListener("keyup", function(){
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("querysearch").click();
    }
});

const firebaseConfig = {
    apiKey: "AIzaSyD6vhkyBFMLTM2Fxc0M0aTo2TvO4YcKbGg",
    authDomain: "vill-c2671.firebaseapp.com",
    projectId: "vill-c2671",
    storageBucket: "vill-c2671.appspot.com",
    messagingSenderId: "545131231563",
    appId: "1:545131231563:web:30455db520dbe1aa4210ce",
    measurementId: "G-614BM0ZLB6"
  };

firebase.initializeApp(firebaseConfig);


//var queryString = decodeURIComponent(window.location.search);
//console.log(queryString);
//queryString = queryString.substring(1);
//console.log(queryString);
//var queries = queryString.split("?");
