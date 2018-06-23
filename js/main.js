function buttonClick()
{
    console.log("Button clicked!");
    btn.removeEventListener("click",buttonClick);
    document.getElementById("text").innerText = "Don't do it"
}

var btn = document.getElementById("go-button");

btn.addEventListener("click",buttonClick);