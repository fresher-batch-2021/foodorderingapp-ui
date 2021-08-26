var slideIndex = 0;
        
        let slideData =["images/wallp2.jpg","images/dominos.jpg"];

        function addSliderImages(){
             const slider = document.querySelector('.slideshow_container');//to place the html code in container
             for(let slide of slideData){
                let slideDiv = document.createElement('div');    
                slideDiv.setAttribute('class','mySlides fade');//it add the specific value     
                slideDiv.innerHTML = `<img class="imgslide" src="${slide}"/>`;
                 slider.appendChild(slideDiv);

            }
       }
         function showSlides() {
             slideIndex++;
            let mySlidesDiv = document.querySelectorAll('.mySlides');
             mySlidesDiv.forEach( divObj=>{                                                  
                divObj.style.display = "none";// Don't display images
            });
             if (slideIndex > mySlidesDiv.length) //reset to 1st image
             {
                 slideIndex = 1 
            }
           //display one image at at time
            mySlidesDiv[slideIndex - 1].style.display = "block";

            setTimeout(showSlides, 1500); // Change image every 2 seconds  
        }
        addSliderImages();
        showSlides();