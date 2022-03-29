const fs = require("fs");
const translate = require("deepl");
/*
var apiKeyInput = document.getElementById("api-key").value;
var lanInput = document.getElementById("input-lan").value;
var lanOutput = document.getElementById("output-lan").value;
*/
let rawdata = fs.readFileSync("template/credentials/credentials.json")
let settingsData = JSON.parse(rawdata);

window.onload = () => {
    /*
    var apiPlaceholder = document.getElementById("api-key").placeholder;
    var inputPlaceholder = document.getElementById("input-lan").placeholder;
    var outputPlaceholder = document.getElementById("output-lan").placeholder;

    apiPlaceholder = "123"
    */
}

document.getElementById("settings-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var apiKeyInput = event.target["api-key"].value;
    var inputLan = event.target["input-lan"].value;
    var outputLan = event.target["output-lan"].value;

    var all = document.getElementsByName("output-lan");


    let languages = "";

    for (var i = 0, max = all.length; i < max; i++) {
        if (all[i].checked) {
            languages += all[i].value + " ";
        }
    }

    var lans = languages.split(" ");
    console.log(lans);

    settingsData["api_key"] = apiKeyInput;
    settingsData["input_lan"] = inputLan;


    settingsData["output_lan"] = languages;

    translate({
        free_api: true,
        text: "Hello",
        target_lang: "RO",
        auth_key: apiKeyInput
    }).then(async function (result) {
        fs.writeFile("template/credentials/credentials.json", JSON.stringify(settingsData), (err) => {
            if (err) throw err;
        });



        alert("Succesfully Updated!");
    }).catch(error => {
        alert("Invalid API Key!");
        console.log(error);
    });



});