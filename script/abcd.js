
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
				// Get the corresponding audio file URL
				//   var audioFile = audioFiles[boxId];
				// Get the corresponding image URL
				var imageUrl = imageFiles[boxId];
				// Get the corresponding text
				var text = textContent[boxId];

				// Create a new Audio object and play the audio file
				/*
				var audio = new Audio(audioFile);
				audio.play();
				*/

				// Display the image in the selected box
				var imageContainer = document.createElement("img");
				imageContainer.classList.add("image-container");
				imageContainer.src = imageUrl;
				this.appendChild(imageContainer);

				// Display the text in the selected box
				var textContainer = document.createElement("p");
				textContainer.classList.add("text-container");

				textContainer.textContent = text;
				this.appendChild(textContainer);


				// Read the text aloud
				var speechSynthesis = window.speechSynthesis;
				var utterance = new SpeechSynthesisUtterance(text);
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







	