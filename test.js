

const translate = require("deepl");
const fs = require("fs");
const { type } = require("os");
const { join } = require("path");
const { callbackify } = require("util");

const { desktopCapture } = require("electron");



function TranslateObject(object, store = {}) {
    Object.keys(object).forEach(async function (key) {


        if (typeof object[key] === "object") {
            store[key] = {};
            //console.log(object[key])
            store[key] = TranslateObject(object[key], store[key]);
        }
        else if (typeof object[key] === "string") {

            await translate({
                free_api: true,
                text: object[key].toString(),
                target_lang: "FR",
                auth_key: "f4327f9c-bb0e-30fe-345a-80f081dc666f:fx"
            }).then(async function (result) {
                store[key] = result.data["translations"][0]["text"];
            }).catch(error => {
                console.log(error);
            });
        }
        console.log("-----------------------------\n")
        Object.keys(store).forEach(async function (key2) {

            console.log(key2)

        });
    });


    return store;
}



let rawdata = fs.readFileSync("json_files/en.json")

var inputData = JSON.parse(rawdata);
var inputString = JSON.stringify(inputData);

TranslateObject(inputData);

console.log("Hello")

