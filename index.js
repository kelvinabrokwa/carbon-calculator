function choose(categ) {
	$('.option').each(function() {
		$(this).removeClass('selected');
	});
	$('#'+categ).addClass('selected');
}

$('.option').click(function() {
	var id = $(this).attr('id') 
	choose(id);
	$('html,body').animate({ scrollTop: $('#'+id).offset().top }, 500);
});
