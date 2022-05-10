function data(input){
var r = (Boolean(input))
if(r === false){
    console.log(" The value is Falsy");
}
else{
console.log(" The value is Truthy");
}}

var a = data(NaN);
var b = data(0);
var c = data(null);
var d = data(undefined);
var e = data("");
var f = data(false);
var e = data("Ritesh");
var f = data(true);
var g = data(23);
var h = data([]);
