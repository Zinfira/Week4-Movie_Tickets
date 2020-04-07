function Ticket(name, age, time) {
   this.name = name;
   this.age = age;
   this.time = time;
 }
 
 // Ticket.prototype.nameChange = function () {
 
 // }
 
 Ticket.prototype.getPrice = function(){
    var ticketOriginalPrice = $12;
    if(this.age === "18-60" && this.time === "5-11" && this.status === firstReleaseMovie){
        this.price; 
       }
    }
 //    } else if ()
 // }
 
 var mySpy = new Ticket("My Spy","18-60","5pm-11pm")
 var Onward = new Ticket("Onward", "18-60", "5pm-11pm")
 var Madtown = new Ticket("Madtown", "18-60", "5pm-11pm")
 var Frozen = new Ticket("Frozen", "18-60", "5pm-11pm")
 
 //function displayTicket(ticketToDisplay) {
 
 //}
 
 
 
 $(document).ready(function(){
    $("#tickets").submit(function(event){
       event.preventDefault();
       var status = "";
       var firstReleaseMovie = $("#first-release-movie").val();
       var nonFirstReleaseMovie = $("#non-first-release-movie").val();
       var inputAge = $("#age").val();
       var inputTime = $("#time").val();
       if(firstReleaseMovie === ''){
          status = nonFirstReleaseMovie;
       }else{
          status = firstReleaseMovie;
       }
       var ticket = new Ticket(status, inputAge, inputTime);
       ticket.getPrice();
       console.log(ticket);
    });
 }); 
       