function checking(){
    var userpass1 = document.getElementById('pass1').value;
    var userpass2 = document.getElementById('pass2').value;

    if (userpass1 == userpass2){
        window.open( "zaglushka.html");
    }
    else {

        alert("Паролі не співпадають!")
    }
}