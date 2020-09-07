// Interval for 4 seconds 
setInterval(Animator,4000);
// ****************************************************************************
// Function Animator to change images within timeout secs
// ****************************************************************************
function Animator()
{
    Ready();
    setTimeout(Steady,2000);
    setTimeout(Go,3000);
}
// ****************************************************************************
// Ready function for shownig red img and hide others
// ****************************************************************************
function Ready()
{
    document.getElementById("first_img").src = "red.png";
    document.getElementsByClassName("message")[0].innerHTML = "Ready";
    document.getElementsByClassName("message")[0].style.color = "red";
    document.getElementById("sec_img").src = "gray.png";
    document.getElementById("third_img").src = "gray.png";
}
// ****************************************************************************
// Steady function for shownig orange img and hide others
// ****************************************************************************
function Steady()
{
    document.getElementById("sec_img").src = "orange.png";
    document.getElementsByClassName("message")[0].innerHTML = "Steady";
    document.getElementsByClassName("message")[0].style.color = "orange";
    document.getElementById("first_img").src = "gray.png";
    document.getElementById("third_img").src = "gray.png";
}
// ****************************************************************************
// Go function for shownig Green img and hide others
// ****************************************************************************
function Go()
{
    document.getElementById("third_img").src = "green.png";
    document.getElementsByClassName("message")[0].innerHTML = "Go";
    document.getElementsByClassName("message")[0].style.color = "green";
    document.getElementById("first_img").src = "gray.png";
    document.getElementById("sec_img").src = "gray.png";
}