document.querySelector("#contact_submit").addEventListener("click", function(e){
    console.log(document.querySelector("#contact_name").value);
    console.log(document.querySelector("#contact_email").value);
    document.querySelector("#thank_you").innerHTML = "Thank you " + document.querySelector("#contact_name").value + "!<br>You will be hearing from us soon.";
    return false;
});