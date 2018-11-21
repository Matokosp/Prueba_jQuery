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
			$('#tweet-btn').on('click', function(e){
				$('#main__row').children('#create__tweet-section').addClass('create__tweet-section--hidden')
			})
		} else {
			$('#main__row').children('#create__tweet-section').removeClass('create__tweet-section--hidden')
			$('#tweet-btn').on('click', function(e){
				$('#main__row').children('#create__tweet-section').removeClass('create__tweet-section--hidden')
			})
		}
	}

	$('#tweet__btn-md').on('click', function(){
		$('.create__tweet-form').children('textarea').focus();
	})

	$('.new_tweet-btn').on('click', function(e){
		$('#main__row').children('#create__tweet-section').toggleClass('create__tweet-section--hidden')
	})

	$('.tweets__section').on('click', '#like__btn', function(){
		$(this).find('#like').css('display', 'none');
		$(this).find('#liked').css('display', 'inline-block');

		var counterLikes = $(this).children('#counter__likes').text();
		counterLikes = parseInt(counterLikes);
		$(this).children('#counter__likes').text(counterLikes + 1);
	})

	$('.tweets__section').on('click', '#delete__tweet', function(){		
		$(this).parent('.tweet__article').fadeToggle(1000, "swing", function(){
		    this.remove();
		});
	})

	$('#tweet-btn').on('click', function(e){
		e.preventDefault();

		var tweetProfileImg    = $('.create__tweet-section').children('img').attr('src');
		var tweetProfileName   = $('.profile__info').children('h3').text();
		var tweetProfileTag    = $('.profile__info').children('h5').text();
		var tweetText          = $('.create__tweet-form').children('.tweet__textarea').val();
		var tweetHtml          = '<article class="row tweet__article">' +
								 '<button class="delete__tweet-div" id="delete__tweet">' +
								 '<i class="far fa-trash-alt"></i>' +
								 '</button>' +
								 '<div class="tweet__profile-img col-xs-3">' +
								 '<img class="img-responsive" src="'+ tweetProfileImg +'">' +
								 '</div>' +
								 '<div class="tweet__body col-xs-9">' +
								 '<h3>'+ tweetProfileName +'</h3><a class="profile__tag" href="https://mobile.twitter.com/MatoSalinas">'+ tweetProfileTag +'</a>' +
								 '<p>'+ tweetText +'</p>' +
								 '<ul id="rrss__icons">' +
								 '<li><i class="far fa-comment"></i></li>' +
								 '<li><i class="fas fa-retweet"></i></li>' +
								 '<li id="like__btn">' +
								 '<i class="far fa-heart" id="like"></i>' +
								 '<i class="fas fa-heart" id="liked"></i>' +
								 '<span id="counter__likes"> 0 </span>' +
								 '</li>' +
								 '</ul>' +
								 '</div>' +
								 '</article>'

		$('.tweets__section').append(tweetHtml);

		// TWEET SUBMIT RESET
		tweetText = $('.create__tweet-form').children('.tweet__textarea').val('');

	})

})