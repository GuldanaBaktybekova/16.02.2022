// document.querySelector('input[type="text]').addEventListener('focus', function(){
//   this.value = "Hello";

// });
// document.querySelector('input[type="text]').addEventListener('blur', function(){
  // this.value = "Bye";

// });
// document.querySelector('input[type="text"]').addEventListener('focus', function(){
//     this.style.borderColor = "initial";
  
//   });
//   document.querySelector('input[type="text"]').addEventListener('blur', function(){
//     if (this.value == false) {
//       this.style.borderColor = " red";
//     }
   
  
//   });


// document.querySelector('input[type="text"]').addEventListener('change', function(){
//   alert('changed')
// });


// document.querySelector('input[type="checkbox"]')
// .addEventListener('change', function(){
//   if (this.checked) {
//     alert('You are employed');
//   }
//   else {
//     alert('You are unemployed');
//   }
// });


document.querySelector('select')
.addEventListener('input', function(){
  if ( this.value == 'Bishkek') {
    alert('Chui');
  }
  else if ( this.value == 'Karakol') {
    alert('Issyk-Kol');
  }
  else if ( this.value == 'Naryn') {
    alert('Naryn');
  }
  else if ( this.value == 'Talas') {
    alert('Talas');
  }
  else if ( this.value == 'Batken') {
    alert('Batken');
  }
  else if ( this.value == 'Jalal-Abad') {
    alert('Jalal-Abad');
  }
  else if ( this.value == 'Osh') {
    alert('Osh');
  }

});


document.querySelector('input[type="checkbox"]')
.addEventListener('copy', function(){


})
document.querySelector('input[type="checkbox"]')
.addEventListener('cut', function(){


})
document.querySelector('input[type="checkbox"]')
.addEventListener('paste', function(){


})
//
document.querySelector('input[type="checkbox"]')
.addEventListener('submit', function(){


});

// let radio = document.getElementsByName('gender');
// radios.forEach()






document.querySelector('#example').addEventListener('focus', function(){
  this.className = "example"
});