var game = {
  options: {
		notation: "Scientific",
		logarithm: {
			base: 10
		}
	},
	money:new Decimal(0);
};

setInterval(function(){
document.getElementById("atoms").innerHTML = game.money

	    }, 10)
