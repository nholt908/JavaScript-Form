function displayInformation(form){
    document.getElementById("info").innerHTML = "Name: " + form.elements["name"].value + "<br>";
}

function hideInformation(){
    document.getElementById("info").innerHTML = "";
}

function resetForm(form){
    form.reset();
}