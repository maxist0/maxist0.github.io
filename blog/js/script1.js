	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  		if (!$(this).next().hasClass('show')) {
    	$(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  		}
  		var $subMenu = $(this).next('.dropdown-menu');
  		$subMenu.toggleClass('show');


  		$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
   		 $('.dropdown-submenu .show').removeClass('show');
  		});


 		 return false;
		});




window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}