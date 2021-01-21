var textInputValue=document.querySelector("#textarea-input");
var btnInput=document.querySelector("#btn-translate");
var output=document.querySelector("#output");

var serverUrl ="https://api.funtranslations.com/translate/yoda.json"

function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("someting wrong with server! please try it after sometime");
}

function clickEventHandler(){

    var showInput=textInputValue.value;

    //call server
    fetch(getTranslationUrl(showInput))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated
    })
    .catch(errorHandler)
}

btnInput.addEventListener("click", clickEventHandler);