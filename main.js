var game = {
  options: {
		notation: "Scientific",
		logarithm: {
			base: 10
		}
	},
	money:new Decimal("10")
};

setInterval(function(){
document.getElementById("atoms").innerHTML = shortenMoney(game.money)

	    }, 10)
