var words = ['Dribble', 'Layup' , 'Travel' , 'Tipoff' , 'Foul' , 'FreeThrow'];
var randWord = words[Math.floor(Math.random() * words.length)];

var x;
var count = 0;
var answerArray = [];
console.log(words);
	function start(){
		for (var i = 0; i < words.length; i++){
			answerArray[i] = "_";
		}
		x = answerArray.join(" ");
		document.getElementById("answer").innerHTML = x;
	}