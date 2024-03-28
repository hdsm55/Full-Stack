var num  = document.querySelectorAll("button").length

for (i = 0 ; i < num ; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function ( ) {
    var buttonName = this.innerHTML
    clicked(buttonName)
    buttonAnmi(buttonName)
  });
}

var buttonName = this.innerHTML

document.addEventListener("keydown", function () {
  var kayName = event.key
  clicked(kayName)
  buttonAnmi(kayName)
});

function clicked(key) {
  switch (key) {
    case "w" :
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
    break;
    
    case "a" :
      var kickBass = new Audio('./sounds/kick-bass.mp3');
      kickBass.play();
    break;

    case "s" :
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
    break;
    
    case "d" :
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
    break;
    
    case "j" :
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
    break;
    
    case "k" :
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
    break;
    
    case "l" :
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
    break;

  default:console.log(key)
    break;
}
}

function buttonAnmi(anmiKey){
var activ = document.querySelector("." + anmiKey)
activ.classList.add("pressed");
setTimeout(function (){
  activ.classList.remove("pressed")
}, 100)
}


// function kayclicked(event) {

//   var kayName = event.key

//   switch (kayName) {
//     case "w" :
//       var crash = new Audio('./sounds/crash.mp3');
//       crash.play();
//     break;
    
//     case "a" :
//       var kickBass = new Audio('./sounds/kick-bass.mp3');
//       kickBass.play();
//     break;

//     case "s" :
//       var snare = new Audio('./sounds/snare.mp3');
//       snare.play();
//     break;
    
//     case "d" :
//       var tom1 = new Audio('./sounds/tom-1.mp3');
//       tom1.play();
//     break;
    
//     case "j" :
//       var tom2 = new Audio('./sounds/tom-2.mp3');
//       tom2.play();
//     break;
    
//     case "k" :
//       var tom3 = new Audio('./sounds/tom-3.mp3');
//       tom3.play();
//     break;
    
//     case "l" :
//       var tom4 = new Audio('./sounds/tom-4.mp3');
//       tom4.play();
//     break;

//   default:console.log(kayName)
//     break;

// }
// }




// function HouseKeeper(name,old){
//   this.name = name;
//   this.old = old;
//   this.clean = function (){
//       alert("Iam cleaning")
//   }
// }
// var  HouseKeeper1 = new  HouseKeeper ("tota" , 18);
// HouseKeeper.clean();

// var audio = new Audio('./sounds/crash.mp3');
// audio.play();

  // if (this.innerHTML === "w" ){
  // }
