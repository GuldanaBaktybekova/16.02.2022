// document.querySelector('input[type="text"]')
//   .addEventListener('focus', function () {
//     this.className = "";
//   });
// document.querySelector('input[type="text"]')
//   .addEventListener('blur', function () {
//     if (!this.value) {
//       this.className = "bad";
//     }
//     else {
//       this.className = "good";
//     }
//   });

// document.querySelector('input[type="text"]')
//   .addEventListener('change', function () {
//     // alert('Changed');
//   });

// document.querySelector('input[type="checkbox"]')
//   .addEventListener('change', function () {
//     if (this.checked) {
//       // alert('You are employed');
//     }
//     else {
//       // alert('You are unemployed');
//     }
//   });

// document.querySelector('select')
//   .addEventListener('input', function () {
//     if (this.value == 'Bishkek') {
//       alert('Chui');
//     }
//     else if (this.value == 'Karakol') {
//       alert('Issyk-Kul');
//     }
//     else if (this.value == 'Osh') {
//       alert('Osh');
//     }
//     else if (this.value == 'Jalal-abad') {
//       alert('Jalal-abad');
//     }
//     else if (this.value == 'Naryn') {
//       alert('Naryn');
//     }
//     else if (this.value == 'Talas') {
//       alert('Talas');
//     }
//     else if (this.value == 'Batken') {
//       alert('Batken');
//     }
//   });


// document.querySelector('input[type="text"]')
//   .addEventListener('copy', function () {
//     console.log('copy triggered');
//   });
// document.querySelector('input[type="text"]')
//   .addEventListener('cut', function () {
//     console.log('cut triggered');
//   });
// document.querySelector('input[type="text"]')
//   .addEventListener('paste', function (event) {
//     event.preventDefault();
//     console.log('paste triggered');
//   });


// let radios = document.getElementsByName('gender');

// document.querySelector('form')
//   .addEventListener('submit', function (event) {
//     event.preventDefault();

//     alert(`${document.querySelector('input[type="radio"]:checked').nextSibling.textContent} was selected`);
//   });

// radios.forEach(function(radio) {
//   radio.addEventListener('input', function() {
//     //alert(`${this.id} was selected`);
//   });
// });

// // 1. Attach changed to checkbox
// // 2. If value is true output "You are employed" if false "You are unemployed"











// //MY


// // // document.querySelector('input[type="text]').addEventListener('focus', function(){
// // //   this.value = "Hello";

// // // });
// // // document.querySelector('input[type="text]').addEventListener('blur', function(){
// //   // this.value = "Bye";

// // // });
// // // document.querySelector('input[type="text"]').addEventListener('focus', function(){
// // //     this.style.borderColor = "initial";
  
// // //   });
// // //   document.querySelector('input[type="text"]').addEventListener('blur', function(){
// // //     if (this.value == false) {
// // //       this.style.borderColor = " red";
// // //     }
   
  
// // //   });


// // // document.querySelector('input[type="text"]').addEventListener('change', function(){
// // //   alert('changed')
// // // });


// // // document.querySelector('input[type="checkbox"]')
// // // .addEventListener('change', function(){
// // //   if (this.checked) {
// // //     alert('You are employed');
// // //   }
// // //   else {
// // //     alert('You are unemployed');
// // //   }
// // // });


// // document.querySelector('select')
// // .addEventListener('input', function(){
// //   if ( this.value == 'Bishkek') {
// //     alert('Chui');
// //   }
// //   else if ( this.value == 'Karakol') {
// //     alert('Issyk-Kol');
// //   }
// //   else if ( this.value == 'Naryn') {
// //     alert('Naryn');
// //   }
// //   else if ( this.value == 'Talas') {
// //     alert('Talas');
// //   }
// //   else if ( this.value == 'Batken') {
// //     alert('Batken');
// //   }
// //   else if ( this.value == 'Jalal-Abad') {
// //     alert('Jalal-Abad');
// //   }
// //   else if ( this.value == 'Osh') {
// //     alert('Osh');
// //   }

// // });


// // document.querySelector('input[type="checkbox"]')
// // .addEventListener('copy', function(){


// // })
// // document.querySelector('input[type="checkbox"]')
// // .addEventListener('cut', function(){


// // })
// // document.querySelector('input[type="checkbox"]')
// // .addEventListener('paste', function(){


// // })
// // //
// // document.querySelector('input[type="checkbox"]')
// // .addEventListener('submit', function(){


// // });

// // // let radio = document.getElementsByName('gender');
// // // radios.forEach()






document.getElementById('example').addEventListener('click', function(){
  this.className = "border";
});
document.getElementById('example').addEventListener('dblclick', function(event){
 
  this.className = "square";
});