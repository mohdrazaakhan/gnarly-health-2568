document.querySelector("form").addEventListener("submit", submitFeedback);


function submitFeedback(event) {
    event.preventDefault();
    
    let userName = document.querySelector("#name").value;


    let userMail = document.querySelector("#e-mail").value;


    let sub = document.querySelector("#subject").value;
    let category = document.querySelector("#issue").value;
    let msg = document.querySelector("#message").innerHTML;



    console.log(userName, userMail, sub, category, msg)



}