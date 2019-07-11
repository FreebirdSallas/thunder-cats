//July 5th/6th: link firebase, also linked on secondjs.js
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
$(document).ready(function() {
  var queryURL =
    "https://app.ticketmaster.com/discovery/v2/events.json?city=Richmond&state=va&startDateTime=2019-07-11T00:00:00Z&sort=date,asc&apikey=MlWuTeAgdA9ovlk9CCHiILZjDA9JuEPt";

  getEvents(queryURL);

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val().response);
  });
});

$("#dateSearch").on("click", function(event) {
  event.preventDefault();
  var dateInput = $("#eday").val().trim();
  var convertedDate = moment(dateInput, "YYYY-MM-DD");
  console.log(convertedDate);
  console.log("#eday", convertedDate, dateInput + "MOFO's");

  //trying to change parameters to start with input from #eday input
  var queryURL =
    "https://app.ticketmaster.com/discovery/v2/events.json?city=Richmond&state=va&startDateTime= " +
    dateInput +
    "T00:00:00Z&sort=date,asc&apikey=MlWuTeAgdA9ovlk9CCHiILZjDA9JuEPt";
  console.log("Query", queryURL);
  getEvents(queryURL);
});

function getEvents(queryURL) {
    console.log("EVENTS?");
    $("#event-card").html("");
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log("response of events", response._embedded.events);
        var eventsrecords = response._embedded.events;

        for (let i = 0; i < eventsrecords.length; i++) {
            console.log("Name",response._embedded.events[i].name);
            console.log("Description",response._embedded.events[i].url);
            console.log("Image",response._embedded.events[i].images[0].url)
            $("#event-card").append(
             `<div class ="list-group list-group-flush list-group-item" id="product${i}">
                 <a href="${response._embedded.events[i].url}" target="_blank"><p>${response._embedded.events[i].name}</p></a>
                  <p>${response._embedded.events[i].name}</p>
                  <img src="${response._embedded.events[i].images[0].url}" width=200 height=200" />
                <button
                class="savedButton" 
                data-value="${response._embedded.events[i].url}" 
                img-src="${response._embedded.events[i].images[0].url}"
                data-description="${response._embedded.events[i].name}">
                Save</button>
            </div>`);


        }
    });
}

$(".card-body").on("click", ".savedButton", function (event) {
    event.preventDefault();
    console.log("TEST");
    var title = $(this).attr("data-value");
    var description = $(this).attr("data-description");
    var imagesource = $(this).attr("img-src");
     database.ref().push({
        title: title,
        description: description,
        imagesource:imagesource
    });
});


var queryLink =
  "https://api.openbrewerydb.org/breweries?by_city=richmond&by_state=virginia&limit=30";

$.ajax({
  url: queryLink,
  method: "GET"
}).then(function(response) {
  console.log(response);
  for (i = 0; i < response.length; i++) {
    var secondCard = `<div class ="list-group list-group-flush list-group-item" id="brew-destination${i}">
             <a href="${response[i].website_url}"><p>${response[i].name}</p></a>
             <p>${
               response[i].street
             }</p><button class="savedButton">Save</button>
             </div>`;

    $("#brew-card").append(secondCard);
  }
});
/*$(".card-body").on("click", ".savedButton", function(event){
                event.preventDefault();
                console.log("TEST");
                //var title= $(this).attr("data-value");
                //var description= $(this).attr("data-description");
                //var name= $(response[i].name).val();
                //var websiteURL = $(response[i].website_url).val();
                var title = $("<h1>").text(response[i].name);
                var description = $("<a>").attr("href", websiteURL);
                database.ref().push({
                    title: title,
                    description: description,


                      var dateInput = $("#eday").val();
    var convertedDate = moment(dateInput, "YYYY-MM-DD");
    console.log(convertedDate);
    console.log("#eday", dateInput);
    //Correct query above, below trying to change parameters to start with input from #eday input
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=Richmond&state=va&startDateTime= " + convertedDate + "T00:00:00Z&sort=date,asc&apikey=MlWuTeAgdA9ovlk9CCHiILZjDA9JuEPt";

      

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  console.log(response._embedded.events[0].name);
  console.log(response._embedded.events[1].name);
  console.log(response._embedded.events[2].name);
  console.log(response._embedded.events[4].name);

  console.log(response._embedded.events[0].url);

  for (i = 0; i < response._embedded.events.length; i++) {
    var newCard = `<div class ="list-group list-group-flush list-group-item" id="product${i}">
            <a href="${response._embedded.events[i].url}"><p>${
      response._embedded.events[i].name
    }</p></a>
            <p>${response._embedded.events[i].dates.start.localDate}</p>
            <img src="${
              response._embedded.events[i].images
            }"><button class="savedButton" data-value="${
      response._embedded.events[i].url
    }" data-description="${response_embedded.events[i].name}">
            Save</button>
            </div>`;

    $("#event-card").append(newCard);
  }

  
});

$("#event-card").on("click", ".savedButton", function(event) {
  event.preventDefault();
  console.log("TEST");

  var title = $(this).attr(data - value);
  var description = $(this).attr(data - description);
  //var title = $("<h1>").text(response._embedded.events[i].name);
  //var description = $("<a>").attr("href", websiteURL);

  database.ref().push({
    title: title,
    description: description
  });
});

//see whether prevChildKey is necessary or not
database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val().response);
  //var eventName = childSnapshot.val().response._embedded.events[i].name;
  //console.log(eventName);
});

//Venue and address Property-  response._embedded.events[i]._embedded.venues[i].address

//
    
*/
                    