function buttonClick()
{
    console.log("Button clicked!");
    btn.removeEventListener("click",buttonClick);
}

var btn = document.getElementById("go-button");

btn.addEventListener("click",buttonClick);