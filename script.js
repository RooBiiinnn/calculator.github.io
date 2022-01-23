
// var input="";
// var calculation=0;




// var buttons = document.querySelectorAll('button');


// let myArray = Array.from(buttons);


// var x=0;


// while(x<=buttons.length){
//    myArray[x].addEventListener('click', function(){
//       calculation= calculation + this.id;
//       calculation= parseFloat(calculation);
//       console.log(calculation);
      

//       if(this.id=="backspace"){
//          input = input.substr(0, input.length-1);
         
//          newinput();
//       }

//       else if(this.id=="clear"){
//          input = input.substr(0, 0);
//          calculation=0;
//          newinput();
//       }
   
//       else{
//          input = String(input)+ String(this.id);
//       newinput();
//       // console.log(input);
//       }
//    })
//    x++;
// }


// function newinput(){
//    document.querySelector('#input').innerHTML = `${input}`
// }


var calculation="";
var display="";
var check;



var buttons = document.querySelectorAll('button');


let myArray = Array.from(buttons);


for(let x=0; x<=buttons.length; x++){
   myArray[x].addEventListener('click', function(){
      if(this.id=="="){
         process();
      }

      else if(this.id=="*" || this.id=="+" || this.id=="/" || this.id=="-")    {
         display = "";
          document.querySelector("#history").innerHTML = calculation;
          calculation= calculation + this.id;

          document.querySelector('#input').innerHTML = ``
         console.log("Hoise");
      }

      else if(this.id=="backspace"){
         calculation = calculation.substr(0, calculation.length-1);
         display = display.substr(0, display.length-1);
         document.querySelector('#input').innerHTML = `${calculation}`
         
         
               newinput();
      }

      else if(this.id=="%"){
          check = this.id;

         document.querySelector("#history").innerHTML = display;
         display = "";
          
         
          document.querySelector('#input').innerHTML = ``
         
         calculation= calculation + this.value;
    
      console.log(calculation);
      }
      
      else if(this.id=="clear"){
         document.querySelector("#history").innerHTML = "‎";
                  calculation="";
                  display="";
                  newinput();
             }
      else {
         display= display + this.id;
         calculation= calculation + this.id;
      document.querySelector('#input').innerHTML = `${display}`;
      console.log(calculation);
      }
   })
}

function process() {
   calculation = eval(calculation);
   document.querySelector("#history").innerHTML = "‎";
   document.querySelector('#input').innerHTML = `${calculation}`;
   console.log("Hoise bjai");
   console.log(calculation);
}

function newinput(){
 if(check=="%"){

   document.querySelector('#input').innerHTML = `${calculation}`
   console.log("Ho");
 }
 else{
   document.querySelector('#input').innerHTML = `${calculation}`
 }
    }