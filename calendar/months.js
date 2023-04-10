function convert(){
    var months = parseInt(document.getElementById("number").value);

    switch(months){
        case 1:
            document.getElementById("body").innerHTML ="January";
        break;
        case 2:
            document.getElementById("body").innerHTML ="February";
        break;
        case 3:
            document.getElementById("body").innerHTML ="March";
        break;
        case 4:
            document.getElementById("body").innerHTML ="April";
        break;
        case 5:
            document.getElementById("body").innerHTML ="May";
        break;
        case 6:
            document.getElementById("body").innerHTML ="June";
        break;
        case 7:
            document.getElementById("body").innerHTML ="July";
        break;
        case 8:
            document.getElementById("body").innerHTML ="August";
        break;
        case 9:
            document.getElementById("body").innerHTML ="September";
        break;
        case 10:
            document.getElementById("body").innerHTML ="October";
        break;
        case 11:
            document.getElementById("body").innerHTML ="November";
        break;
        case 12:
            document.getElementById("body").innerHTML ="December";
        break;
        default:
            document.getElementById("body").innerHTML ="INVALID MONTH";
            break;
    }
}