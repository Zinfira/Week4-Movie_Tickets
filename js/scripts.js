function Ticket(name, age, time) {
   this.name = name;
   this.age = age;
   this.time = time;
 }
 
Ticket.prototype.getPrice = function(){
   var price = 12;
   if (this.age === "0-12" || this.age === "60+") {
      price -= 5;
   }
   if (this.name === "Resistance" || this.name === "Onward") {
      price += 3;
   } 
   if (this.time === "9am" || this.time === "11am" || this.time === "2pm")  {
      price -= 3;
   }
   return price;
}
 
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