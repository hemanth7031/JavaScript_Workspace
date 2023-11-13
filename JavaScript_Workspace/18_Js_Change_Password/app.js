// change password
// Attribute changes
// 1) getAttribute('src')=>
// 2) setAttribute('src',youtube.jpg)
// EX: <img src="facebook.jpg">



let passwordBox =document.querySelector("#password");
let checkBox= document.querySelector("#checkbox");
checkBox.addEventListener('change',function(){
    let typeAttribute =passwordBox.getAttribute('type');
    if(typeAttribute === 'password'){
        passwordBox.Attribute('type','text');
    }else{
        passwordBox.Attribute('type','password');
    }
})