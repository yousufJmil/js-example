//Number//
document.getElementById("num").innerHTML = 10.50;
</script>
//Statement//

let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("state").innerHTML =
"The value of z is " + z + ".";  




//Demo//
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

//Change css//

function changeCss(){
	document.getElementById('ccc').style.fontSize="r60px";
}


//Change css//

function changeCss(){
	document.getElementById('cc').style.color="red";
}

//text Hide/show //

function cShow(){
	document.getElementById('ss').style.display="block";


function cHide(){
	document.getElementById('ss').style.display="none";
}


let x = "Volvo" + 16;
document.getElementById("demo").innerHTML = x;