function game(){
	this.list = [
				 'new castle',
				 'west bromwich albion',
				 'swansea', 
				 'everton', 
				 'stoke', 
				 'burnley', 
				 'liverpool', 
				 'arsenal', 
				 'mnanchester united', 
				 'manchester city', 
				 'tottenham', 
				 'west ham united', 
				 'southhampton', 
				 'brighton and hove albion', 
				 'chelsea', 
				 'watford', 
				 'leicester', 
				 'bournemouth', 
				 'huddersfield town', 
				 'crystal palace'
				 ];

	this.chosen = this.list[ Math.floor(Math.random() * this.list.length) ]
	this.number = 0;
}

module.exports = game;