function dabaya(e){
    document.getElementById("inp").value += e;
}

// jab bhi field ki bat ai ge to hm .value use karay ga
// new bhi raha porani bhi raha to hm = sa phala + lagae ga

function eq(){
   var a = document.getElementById("inp").value
document.getElementById("inp").value = eval(a);
}

function clr(){
    document.getElementById("inp").value = "" 
}

function modulas() {
    document.getElementById("inp").value += '%';
}

function clearLast() {
    var inp = document.getElementById("inp").value;
    document.getElementById("inp").value = inp.slice(0, -1);
}