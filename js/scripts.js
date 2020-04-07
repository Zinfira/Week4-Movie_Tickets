function Ticket(name, age, time) {
   this.name = name;
   this.age = age;
   this.time = time;
 }
 
 // Ticket.prototype.nameChange = function () {
 
 // }
 
Ticket.prototype.getPrice = function(){
   var price = 12;
   if (this.age === "0-12" || this.age === "60+") {
      price -= 5;
   }
   if (this.name === "Resistance" || this.name === "Onward") {
      price += 3;
   } 
   if (this.time === "9am-5pm") {
      price -= 3;
   }
   
   return price;

}

   //  if (this.age === "0-60" && this.time === "5pm-11pm" || this.name === "My Spy" || this.name === "Onward") {
   //      this.price; // original price
   //    } else if (this.age === "60+" && this.time === "5pm-11pm" || this.name === "My Spy" || this.name === "Onward") {
   //       this.price; // senior first release evening
   //    } else if (this.age === "0-60" && this.time === "9am-5pm" || this.name === "My Spy" || this.name === "Onward") {
   //       this.price; // first release morning
   //    } else if (this.age === "60+" && this.time === "9am-5pm" || this.name === "My Spy" || this.name === "Onward") {
   //       this.price; // senior first release morning
   //    } else if (this.age === "0-60" && this.time === "5pm-11pm" || this.name === "Madtown" || this.name === "Frozen") {
   //       this.price; // not release evening price
   //    } else if (this.age === "60+" && this.time === "5pm-11pm" || this.name === "Madtown" || this.name === "Frozen") {
   //       this.price; // senior not release evening price
   //    } else if (this.age === "0-60" && this.time === "9am-5pm" || this.name === "Madtown" || this.name === "Frozen") {
   //       this.price; // not release morning price
   //    } else if (this.age === "60+" && this.time === "9am-5pm" || this.name === "Madtown" || this.name === "Frozen") {
   //       this.price; // senior not release morning price
   //    }
   
 //    } else if ()
 // 
 
 var mySpy = new Ticket("My Spy","0-60","5pm-11pm")
 var Onward = new Ticket("Onward", "0-60", "5pm-11pm")
 var Madtown = new Ticket("Madtown", "0-60", "5pm-11pm")
 var Frozen = new Ticket("Frozen", "0-60", "5pm-11pm")
 
 function displayTicket(ticket) {
   var ticketTotal = "<h2 class='movieName'>Movie: " + ticket.name + "<br>Time: " + ticket.time +"</h2><hr><p class=ticketAge: " + ticket.age + "</p><hr><h3 class='price'>Price: $" + ticket.getPrice() + "</h3";
   $("#result").html(ticketTotal);
 }
 
 
 
 $(document).ready(function(){
    $("#tickets").submit(function(event){
       event.preventDefault();
       var name = $("select#name").val();
       var age = $("select#age").val();
       var time = $("select#time").val();
       var newTicket = new Ticket(name, age, time);
       newTicket.getPrice();
       displayTicket(newTicket);
    });
 });