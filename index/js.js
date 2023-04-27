// let x = 3
// let y = 4
// let sum =x+y
// console.log(sum);


// for(var i=0; i<=10; i++){
//     console.log(i);
//     if(i=5){
//     console.log(i);
//     }
// }

// function evening(){
//     console.log("good evening");
// }
// var btn= document.getElementById("btn");
// btn.addEventListener('click', (e) =>{
//     e.preventDefault();
//     var one = parseInt(document.getElementById("one").value);
//     var two = parseInt(document.getElementById("two").value);
//     var sub=one-two;
//     console.log(sub);
// })
// function sum(){

// }

// tm.addEventListener('click', () => {

// var hr = parseInt(document.getElementById("time").value);

// if (hr>=5 && hr < 12) {
//     alert('Good morning');
// }
// else if (hr >= 12 && hr < 18){
//     alert('Good Afternoon');
// }
// else
//     alert('good evening');
// })
// var myDiv = document.getElementById("root");
// var p = document.createElement("p");
// p.innerHTML = "Liverpool";
// myDiv.append(p)

// function change(){
//     document.getElementById("pic").src="gtr2.jpg";
// }
// function back(){
//         document.getElementById("pic").src="gtr1.jpg";
// }
// var label = document.getElementById("label");
// var msg = document.getElementById("msg");
// function validateEmail(){
//     if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         msg.innerHTML = "Please enter a valid email";
//         return false;
//     }
// }
const btn = document.getElementById('btn');
var email = document.getElementById("email");
var password = document.getElementById("password");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    var email_value = document.getElementById('one').value;
    var length = email_value.length;
    if(length < 6) {
        email.classList.add("active");
    }
    if(length < 8){
        password.classList.add("active");
    }
})
var one = document.getElementById("one");
var label = document.getElementById("label");
var msg = document.getElementById("msg");
function validateEmail(){
    if(!one.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        msg.innerHTML = "Please enter a valid email";
        return false;
    }
    msg.innerHTML = "";
    return true;
}