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

$(document).ready(function () {

    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=Richmond&state=va&startDateTime=2019-08-09T00:00:00Z&sort=date,asc&apikey=MlWuTeAgdA9ovlk9CCHiILZjDA9JuEPt"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        console.log(response._embedded.events[0].name);
        console.log(response._embedded.events[1].name);
        console.log(response._embedded.events[2].name);
        console.log(response._embedded.events[4].name);

        console.log(response._embedded.events[0].url);

        for(i = 0; i < response._embedded.events.length; i++) {
            var newCard = $("<div />", {id:"product"+i});
            newCard.addClass("list-group list-group-flush");
            $(".list-group-flush").addClass("list-group-item");
            newCard.append(response._embedded.events[i].name);
            newCard.append(response._embedded.events[i].url);
            newCard.prepend(response._embedded.events[i].dates.start.localDate);
            $("#event-card").prepend(newCard);
        
        }
    })
        //creating a checkbox for each event card
        $('<input type="checkbox" name="myCheckbox" />').prependTo(".list-group-item");
        
        
        $(".card-body").on("click", ".savedButton", function(event){
            event.preventDefault();
            console.log("TEST");
            var dataValue= response._embedded.events[i].name.val();
            var dataDescription= response._embedded.events[i].url.val();
            var title= $(this).attr(dataValue);
            var description= $(this).attr(dataDescription);
            //var title = $("<h1>").text(response._embedded.events[i].name);
            //var description = $("<a>").attr("href", websiteURL);

           
            
            database.ref().push({
                title: title,
                description: description
            })
            //see whether prevChildKey is necessary or not
        database.ref().on("child_added", function(childSnapshot) {
            console.log(childSnapshot.val().response);
            //var eventName = childSnapshot.val().response._embedded.events[i].name;
            //console.log(eventName);
        })
    })
    
        //Venue and address Property-  response._embedded.events[i]._embedded.venues[i].address
       
    

//===========================================================================
    var queryLink = "https://api.openbrewerydb.org/breweries?by_city=richmond&by_state=virginia&limit=30"

     $.ajax({
         url: queryLink,
         method: "GET"
     }).then(function (response) {
         console.log(response);
         for(i = 0; i < response.length; i++) {
             var secondCard = $("<div>");
             secondCard.addClass("list-group list-group-flush");
             $(".list-group-flush").addClass("list-group-item");
             secondCard.append(response[i].name);
             secondCard.append(response[i].website_url);
             secondCard.append(response[i].street);
            $("#brew-card").append(secondCard);
         }
        })
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
                    description: description,*/
                })

//=============================================
//ESSENTIAL PROPERTIES
// Name, URL, images, dates.start, dates.status, venues.address

  //==================================================================      
        

    

        

            
