
// Empty Values upon Loading in Insert Boxes
window.onload = function(){
document.getElementById("bill").value = "";
document.getElementById('people').value = "";
}

// Using var for scope of variables

var x,y,p,sel,tip;

// Calculating the Tip
function calculate (x, y, p) {
	x = Number(document.getElementById('bill').value);
	y = Number(document.getElementById('people').value);
	tip = x*y;
	sel = document.getElementById('option');
	p = sel.options[sel.selectedIndex];

	
	for(let i=0; i<sel.options.length;i++){
		opt = sel.options[i];
		if(opt.value == "aboveaverage"){
			document.getElementById('response').innerHTML = "$" + tip*0.20;
			break;
		} else if(opt.value == "average"){
			document.getElementById('response').innerHTML = "$" + tip*0.15;
			break;
		}else if(opt.value == "satisfactory"){

			document.getElementById('response').innerHTML = "$" + tip*0.10;
		} else if(opt.value == "belowsatisfactory"){
			document.getElementById('response').innerHTML = "$" + tip*0.05;
			break;
		}

	}

	try{
		if(x=="") throw "Empty";
		if(isNaN(x)) throw "Not a Number";
		if(y == "") throw "Empty";
		if(isNaN(y)) throw("Not a Number");
	} catch(err){
		document.getElementById('response').innerHTML = `A Value is ${err}`;
	}
}