
		var boxes = document.querySelectorAll(".box");
		var selectedBox = null;

		for (var i = 0; i < boxes.length; i++) {
			boxes[i].addEventListener("click", function () {
                /*
				if (selectedBox) {
					selectedBox.classList.remove("selected");
				}
                */
				selectedBox = this;
				//this.classList.add("selected");
				this.classList.add("clicked");
                
                
                //to bring the selected box into view
                selectedBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                  

				// Get the ID of the selected box
				var boxId = this.getAttribute("id");
				
				// Get the corresponding text
				var text = textContent[boxId];

				




				// Read the text aloud
				var speechSynthesis = window.speechSynthesis;
		var modifiedText = text.replace("→", ""); // Modify the text to replace the multiplication sign with "into"
		var utterance = new SpeechSynthesisUtterance(modifiedText);
		speechSynthesis.speak(utterance);



			});

            


		}

        // Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Apply random font color to each .box element
  var boxes = document.getElementsByClassName('box');
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.color = getRandomColor();
  }







	