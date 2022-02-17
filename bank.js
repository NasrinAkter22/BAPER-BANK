document.getElementById("login-submit").addEventListener('click',function(){
 const emailFild= document.getElementById('user-email');
 const userEmail=emailFild.value;
 console.log(userEmail);
//  get user pass  
const passwordFild=document.getElementById('user-password');
const userPassword=passwordFild.value;
console.log(userPassword);

if(userEmail =='sontan@baap.com'&& userPassword =='secret'){
    console.log('valid');
    window.location.href='banking.html';


}
})

