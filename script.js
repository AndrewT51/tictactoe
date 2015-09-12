$(document).ready(init);

function init(){
	var myFirebaseRef = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com/");
	$('body').show()
	var turnNumber = 1;
	player1Squares = [];
	player2Squares = [];
	$('td').click(function(){
		$this = $(this);
		if (!$this.hasClass('occupied')){
		
			if (turnNumber % 2 === 0){		
				$this.addClass('blue');
				$this.addClass('occupied');
				player2Squares = $this.attr('id').split('').concat(player2Squares);	
				turnNumber ++;

			}else{
				$this.addClass('green');
				$this.addClass('occupied');
				player1Squares = $this.attr('id').split('').concat(player1Squares);
				turnNumber ++;
			}
		}
		player1Squares.sort();
		player2Squares.sort();
		var player1has3 = (/(.)\1{2}/i).test(player1Squares.join(''));
		var player2has3 = (/(.)\1{2}/i).test(player2Squares.join(''));
		if (player1has3){
			winner('Player 1')
		}
		if (player2has3){
			winner('Player 2')
		}
	})
	function winner(name){
		var $winText = $('#winText');
		setTimeout(function(){
			$('body').hide();
			$('td').removeClass('blue green occupied');
			$winText.hide();
			init();
		}, 1500)
			$winText.text(name + ', you are victorious!!');
			$winText.show();
			$('td').removeClass('blue green occupied');
		
	}
}
