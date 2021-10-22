import "../css/content.scss";
import "./main";

// format links
$('.content h1, .content h2, .content summary').each(function() {
    var text = $(this).text();
    $(this).text(text + ' ');
    var id = text.trim().replace(/ /g, '');

    if ($(this).prop('tagName') == 'H2') {
        id = $(this).prevAll('h1:first').attr('id') + "-" + id;
    }

    $(this).attr('id', id);

    var height = $(this).height();
    var link = document.createElement('a');
    link.classList.add('anchor');
    $(link).attr('href', "#" + id);
    $(link).attr('aria-hidden', "true");
    $(this).prepend(link);

    // add to table of contents if h1
    if ($(this).prop('tagName') == 'H1' || $(this).prop('tagName') == "SUMMARY") {
        var item = document.createElement('li');

        var icon = document.createElement('i');
        icon.classList.add("fas");
        icon.classList.add("fa-chevron-right");
        item.append(icon);

        var a = document.createElement('a');
        a.classList.add("nav-link");
        $(a).attr('href', '#' + id);
        var textarray = text.split(" ");
        if(textarray.length > 3) {
            textarray.splice(2, 0, "<wbr>");
        }
        text = textarray.join(" ");
        $(a).append(text);

        item.append(a);

        $('#contents ul').append(item);
    }

});


// format in-text citations
$('.content a').each(function() {
    var link = $(this).prop('href');
    var matches = link.match('#citation(.*)')
    console.log(matches);
    if (matches) {
        $(this).addClass('citation');
        $(this).attr('id', 'intext' + matches[1]);
        var text = $(this).text();
        $(this).text('(' + text + ')');
    }
});

// format definitions
$('dfn').each(function() {
    var text = $(this).text();
    var matches = text.match('(.*)(~)(.*)');
    $(this).text(matches[1].trim());
    $(this).attr('title', matches[3].trim());
    $(this).attr('data-toggle', 'tooltip');

    $(this).tooltip();
});

$('#bg-attribution').tooltip();

//add animation for protocol summary - details
function collapse(el) {
	$(el).parent().removeAttr('open');
	$(el).siblings(':not(summary)').removeAttr('style');
}
$(function(){
	//Set accessibility attributes
	$('summary').each(function(){
		$(this).attr('role', 'button');
		if ($(this).parent().is('[open]')) { $(this).attr('aria-expanded', 'true'); }
		else { $(this).attr('aria-expanded', 'false'); }
	});
	
	//Event handler
	$('summary').on('click', function(e){
		e.preventDefault();
		if ($(this).parent().is('[open]')) {
			$(this).attr('aria-expanded', 'false');
			$(this).siblings(':not(summary)').css('transform', 'scaleY(0)');
			window.setTimeout(collapse, 500, $(this));
		} else {
			$(this).parent().attr('open', '');
			$(this).attr('aria-expanded', 'true');
		}
	});
});