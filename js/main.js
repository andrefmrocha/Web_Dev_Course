var btn = document.getElementById("go-button");

function buttonClick()
{
    console.log("Button clicked!");
    var customText = document.getElementsByClassName("my-input");
    var result = document.getElementById("text");
    var textArea = document.getElementsByClassName("my-text-area")
    result.innerHTML = "You want to search for " + customText[0].value + "<br/>";
    result.innerHTML+="With the intent of " + textArea[0].value;
}

btn.addEventListener("click",buttonClick);

