// Used for each letter in the current word. 
// Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
// This should contain letter specific logic and data.

var letter = function (x){
	this.show = false;
	this.self = x
	this.hide = "_"
}

letter.prototype.display = function(){
	if(this.self != " "){
		if(this.show)
			{ return this.self }
		else{return this.hide}
	} 
	else{
		return this.self
	}
}


module.exports = letter