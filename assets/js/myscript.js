$(document).ready(function(){

	var query1200 = window.matchMedia("(min-width: 1200px)")
	var query768 = window.matchMedia("(max-width: 768px)")

	myFunction(query1200)
	query1200.addListener(myFunction)
	function myFunction(query1200) {
	    if (query1200.matches) {
	        $('.tweet__textarea').attr('cols', '50')
	    } else {
	        $('.tweet__textarea').attr('cols', '35')
	    }
	}

	myFunction(query768)
	query768.addListener(myFunction)
	function myFunction(query768) {
		if (query768.matches ) {
			$('#main__row').children('#create__tweet-section').addClass('create__tweet-section--hidden')
		} else {
			$('#main__row').children('#create__tweet-section').removeClass('create__tweet-section--hidden')
		}
	}

	$('.new_tweet-btn').on('click', function(e){
		e.preventDefault();
		$('#main__row').children('#create__tweet-section').toggleClass('create__tweet-section--hidden')
	})

})