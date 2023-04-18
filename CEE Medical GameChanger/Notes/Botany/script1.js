const sidebar = document.getElementById('sidebar');
const sidebarNav = document.getElementById('sidebar-nav');
const pinBtn = document.getElementById('pin-btn');
const resizable = document.createElement('div');
resizable.classList.add('resizable');
sidebar.appendChild(resizable);

let startX, startWidth;

resizable.addEventListener('mousedown', (event) => {
  startX = event.clientX;
  startWidth = parseInt(window.getComputedStyle(sidebar).width, 10);
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mouseup', mouseup);
});

function mousemove(event) {
  const width = startWidth + event.clientX - startX;
  sidebar.style.width = `${width}px`;
}

function mouseup() {
  document.removeEventListener('mousemove', mousemove);
  document.removeEventListener('mouseup', mouseup);
}

function toggleSidebar() {
  sidebar.classList.toggle('show');
}

function pinSidebar() {
  sidebar.classList.toggle('pinned');
}

sidebar.addEventListener('mouseenter', () => {
  if (!sidebar.classList.contains('pinned')) {
    sidebar.classList.add('show');}
});

sidebar.addEventListener('mouseleave', () => {
if (!sidebar.classList.contains('pinned')) {
sidebar.classList.remove('show');
}
});

pinBtn.addEventListener('click', () => {
pinSidebar();
});


 // Add function to make collapsible buttons work
 var coll = document.getElementsByClassName("collapsible");
 var i;
 for (i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var content = this.nextElementSibling;
         if (content.style.display === "block") {
             content.style.display = "none";
         } else {
             content.style.display = "block";
         }
     });
 }