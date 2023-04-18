var pinBtn = document.querySelector('.pin-btn');
var sidebar = document.querySelector('.sidebar');
var main = document.querySelector('.main');

pinBtn.addEventListener('click', function() {
	sidebar.classList.toggle('pin-sidebar');
	main.classList.toggle('pin-sidebar');
});

main.addEventListener('mousemove', function(e) {

    if (sidebar.classList.contains('pin-sidebar')) {
        return;
        }
       
        if (e.clientX < 50) {
            sidebar.classList.add('show-sidebar');
        } else {
            sidebar.classList.remove('show-sidebar');
        }
});
        
 window.addEventListener('resize', function() {
            if (sidebar.classList.contains('pin-sidebar')) {
            return;
            }
        
        
            if (window.innerWidth > 768) {
            sidebar.classList.add('show-sidebar');
            } else {
            sidebar.classList.remove('show-sidebar');
            }
});
    
      