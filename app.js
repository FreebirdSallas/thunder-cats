$(document).ready(function () {

    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=Richmond&state=va&apikey=MlWuTeAgdA9ovlk9CCHiILZjDA9JuEPt"

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

        //Venue and address Property-  response._embedded.events[i]._embedded.venues[i].address
        console.log(response._embedded.events[0]._embedded.venues[0]); gig
        console.log(response._embedded.events[0]._embedded.venues[0].address);


        //===========================================================================
        var eventName0 = response._embedded.events[0].name;
        var ticketURL0 = response._embedded.events[0].url;

        var eventname8 = response._embedded.events[8].name;
        var ticketURL8 = response._embedded.events[8].url;

        $("#name0").html(eventName0);
        $("#url0").html(ticketURL0);

        $("#name8").html(eventname8);
        $("#url8").html(ticketURL8);

        //=============================================
        //ESSENTIAL PROPERTIES
        // Name, URL, images, dates.start, dates.status, venues.address

        //==================================================================      
        //Make an array/for-loop for the various events

        //eventArr = [response._embedded.events[0], 'response._embedded.events[1]',  'response._embedded.events[2]', 'response._embedded.events[3]', 'response._embedded.events[4]', 'response._embedded.events[5]', 'response._embedded.events[6]', 'response._embedded.events[7]', 'response._embedded.events[8]', 'response._embedded.events[9]'];
        //for(i = 0; i < eventArr.length; i++) {
        //$("#results").html(eventArr);



    });
    var queryLink = "https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=EQD2EBKNFSTMSPVNWFUS&redirect_uri=https://freebirdsallas.github.io/thunder-cats"
    $.ajax({
        url: queryLink,
        method: "GET"
    }).then(function (response) {
        console.log(response);

    });

});


