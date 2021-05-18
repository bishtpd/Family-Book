var imgearray = ["fther.png", "mther.png", "child.png"];
var labelarray = ["father", "mother", "child"];
 var i = 0;
function strtchging(){
    document.getElementById("swtch").src = imgearray[i];
    document.getElementById("info").innerHTML = labelarray[i];
    i++;
}