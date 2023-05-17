function openContainer(evt, containerName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("container");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById(containerName + "-container").style.display = "block";
    evt.currentTarget.className += " active-tab";
  }

  



  // JavaScript file

// Script 1: Polyfill
var script1 = document.createElement('script');
script1.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
document.head.appendChild(script1);

// Script 2: MathJax
var script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
document.head.appendChild(script2);

// Script 3: MathJax Configuration
var script3 = document.createElement('script');
script3.type = 'text/x-mathjax-config';
script3.innerHTML = `
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$', '$']],
            processEscapes: true
        },
        "HTML-CSS": {
            scale: 90
        }
    });
`;
document.head.appendChild(script3);
