function display(num) {
    var screen = document.getElementById("screen");
    screen.value += num;
};

function insertSym(sym) {

    var screen = document.getElementById("screen");
    screen.value += sym;
};

function calculate() {
    var screen = document.getElementById("screen");
    var result = eval(screen.value);
    screen.value = result;

};

//The Cls is a Clear Screen function..used to clear screen
function clr() {
    var screen = document.getElementById("screen");
    screen.value = "";
};


///function has neen updated

/*function del(){
    alert(" buttonis  undefined yet")
}*/

//The del() function.. to do delete operation

function del() {
    var screen = document.getElementById("screen");
    var exp = screen.value;
    var led = exp.substring(0, exp.length - 1);
    screen.value = led;
};


/*var screen = document.getElementById('screen');


function display(num) {
      screen.value += num
}


function calculate() {
  try {
    screen.value = eval(screen.value)
  }
  catch (err) {
    alert("Invalid")
  }
}

function clr() {
  screen.value = ''
}

function del() {
  screen.value = screen.value.slice(0, -1)
}
*/

//enjoy the calculater with a beautiful ui :)