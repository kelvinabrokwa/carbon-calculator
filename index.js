

function choose(categ) {
	$('.option').each(function() { $(this).removeClass('selected'); });
	$('#'+categ).addClass('selected');
}

$('.option').click(function() {
	var id = $(this).attr('id');
	choose(id) 
});

$('.option').on('click', function(e) {
	var target = $( $(this).attr('href') );
	if (target.length) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 2000}, 1000);
	}
});