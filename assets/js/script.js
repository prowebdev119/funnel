thanks = () => {
    var x = document.getElementById("name").value;
    var y = document.getElementById("email").value;
    var z = document.getElementById("number").value;
    var a = document.getElementById("city").value;

    var experience1 = document.getElementById("si").checked;
    var experience2 = document.getElementById("no").checked;

    var usd1 = document.getElementById("usd1").checked;
    var usd2 = document.getElementById("usd2").checked;
    var usd3 = document.getElementById("usd3").checked;


    if(x && y && z && a && (experience1 || experience2) && (usd1 || usd2 || usd3)){
        window.location.href = "thankyou.html"
    } else {
        document.getElementsByClassName("alarm")[0].style.display = "block";
    }
}