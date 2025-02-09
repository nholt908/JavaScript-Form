function displayInformation(form){
    if(!document.getElementById("agree").checked){
        alert("Please agree to the Terms and Conditions");
        return;
    }
    document.getElementById("info").innerHTML = "Name: " + form.elements["name"].value + "<br>"
    + "Email: " + form.elements["email"].value + "<br>"
    + "Password: " + form.elements["password"].value + "<br>"
    + "Age: " + form.elements["age"].value + "<br>"
    + "Gender: " + form.elements["gender"].value + "<br>"
    + "Country: " + form.elements["country"].value;
}

function hideInformation(){
    document.getElementById("info").innerHTML = "";
}

function resetForm(form){
    form.reset();
}