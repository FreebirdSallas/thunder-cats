//Firebase link 
var firebaseConfig = {
  apiKey: "AIzaSyDrhocF8Bv1FDgSBSfzat2sVtr9WDPXxdU",
  authDomain: "thundercats-8496f.firebaseapp.com",
  databaseURL: "https://thundercats-8496f.firebaseio.com",
  projectId: "thundercats-8496f",
  storageBucket: "thundercats-8496f.appspot.com",
  messagingSenderId: "889437390292",
  appId: "1:889437390292:web:46a78efc5d0c0e13"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

  //appends event's data title & data description from database to #savedContainer div on saved.html
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());
    var title = childSnapshot.val().title;
    var description = childSnapshot.val().description;

    $("#savedContainer").append(`<div class='card'><div class="card-title">${title}</div><div class="card-body">${description}</div>`)

})