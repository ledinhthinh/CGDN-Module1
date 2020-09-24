let user = prompt("Who's there?",'');
let pass = prompt('Password','');
if (user == 'Admin'){
    if (pass == '12345'){
        alert('wellcome');
    }else if (pass == ""){
        alert('canceled.');
    }else {
        alert('Wrong password.');
    }
}else if (user == ""){
    alert('Canceled.');
}else {
    alert("I don't know you?");
}