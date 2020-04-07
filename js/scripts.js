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
       this.price = 
      }
   }
//    } else if ()
// }


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
      //var ticketPrice = getPrice(ticket);
    });
});