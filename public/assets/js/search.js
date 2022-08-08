
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
console.log(queryString);
document.getElementById("whatsearch").innerHTML = `Search results for: ${queryString}`;

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

const internships = []
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("Internships").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        internships.push(doc.data());
        // console.log(`${doc.id} => ${doc.data()["Description"]}`); //Object.values(doc.data())
    });
    const options = {
        includeScore: true,
        keys: [{name:'Name', weight:0.7}, {name:"Description", weight:0.3}]
      }
    
    //console.log(internships);
    
    const fuse = new Fuse(internships, options);
    
    const result = fuse.search('Test');
    console.log(result);
    //result.reverse();

    for (let i = 0; i < result.length; i++) {
        let append = `<div class="box">
                        <div class="col-6 col-12-narrower">

                            <section class="box special">
                                <span class="image featured"><img src="images/pic02.jpg" alt=""></span>
                                <h3>${result[i]["item"]["Name"]}</h3>
                                <p>Description

                                ${result[i]["item"]["Description"]}</p>
                                <ul class="actions special">
                                    <li><a href="#" class="button alt">Learn More</a></li>
                                </ul>
                            </section>
        
                        </div>
					</div>
                    `;
        document.getElementById("internships").innerHTML += append;
    }
});



//var queryString = decodeURIComponent(window.location.search);
//console.log(queryString);
//queryString = queryString.substring(1);
//console.log(queryString);
//var queries = queryString.split("?");
