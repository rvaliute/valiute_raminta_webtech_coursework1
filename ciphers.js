var textarea = document.getElementById("inputText");
var textarea2 = document.getElementById("outputText");
var textarea3 = document.getElementById("inputText2");
var textarea4 = document.getElementById("outputText2");

function Rot13Encode(e) {
		var str = textarea.value.toLowerCase().split(" ").sort().join(" ");
		var shift = document.getElementById("shiftSelect").value = e.target.value
		var output = "";
		
		for (var i = 0; i < str.length; i ++) {
			var character = str[i];
			var code = str.charCodeAt(i);
			
                character = String.fromCharCode(((+code - +97 + +shift) % 26) + +97);
				/*window.alert((+code - +97 + +shift) % 26)*/
				
			output += character;
		}
		
		textarea2.value = output;
	}
	

	function Rot13Decode() {
		var str = textarea.value.toLowerCase().split(" ").sort().join(" ");
		var shift = document.getElementById("shiftSelect").value = e.target.value
		var output = "";
		
		for (var i = 0; i < str.length; i ++) {
			var character = str[i];
			var code = str.charCodeAt(i);
			
				character = String.fromCharCode(((+code - +97 + +shift) % 26) + +97);
			output += character;
		}
		
		textarea2.value = output;
	}
	

    function MorseEncode() {

       textarea4.value = textarea3.value.split(" ").sort().join(" ")
	   .replace(/a/gi, ".- ")
	   .replace(/b/gi, "-... ")
	   .replace(/c/gi, "-.-. ")
	   .replace(/d/gi, "-.. ")
	   .replace(/e/gi, ". ")
	   .replace(/f/gi, "..-. ")
	   .replace(/g/gi, "--. ")
	   .replace(/h/gi, ".... ")
	   .replace(/i/gi, ".. ")
	   .replace(/j/gi, ".--- ")
	   .replace(/k/gi, "-.- ")
	   .replace(/l/gi, ".-.. ")
	   .replace(/m/gi, "-- ")
	   .replace(/n/gi, "-. ")
	   .replace(/o/gi, "--- ")
	   .replace(/p/gi, ".--. ")
	   .replace(/q/gi, "--.- ")
	   .replace(/r/gi, ".-. ")
	   .replace(/s/gi, "... ")
	   .replace(/t/gi, "- ")
	   .replace(/u/gi, "..- ")
	   .replace(/v/gi, "...- ")
	   .replace(/w/gi, ".-- ")
	   .replace(/x/gi, "-..- ")
	   .replace(/y/gi, "-.-- ")
	   .replace(/z/gi, "--.. ")
	  }
	  
function MorseDecode() {
	var output="";
	var alphabet = { 
    '.-':'a',
    '-...':'b',
    '-.-.':'c'
	};

/*
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z'
  };

var output = "";

		var morse = {
		".- ": "a",
		"-... ": "b",
		"-.-. ": "c",
		"-.. ": "d"
		};
		
		var convert = textarea3.value.split(" ").sort().join(" ")
		
		for (var i = 0; i < convert.length; i++) {
			convert[i] = morse[convert[i]];

		output += convert;

        }

      textarea4.value=output;
*/
}

function erase() {
	textarea.value = "";
	textarea3.value = "";
    location.reload();
	}