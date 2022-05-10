function check(dataType){

if(dataType){
    console.log( "Type of data :  "  + "Truthy") ;
}
else{
    console.log("Type of data :  " + "Falsy");
}}

var a = check(0);
var b = check("");
var c = check("Ritesh");
var d = check(Boolean(true)) ;
var e = check(Boolean(false));


