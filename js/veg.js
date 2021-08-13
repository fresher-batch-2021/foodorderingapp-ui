
    var images = [{ id:1,imageUrl: "veg-biryani.jpg",name:"vegbriyani",price:"159 "},
     { imageUrl: "veg noodles.jpg",name:"vegnoodles",price:"200"}, 
    { imageUrl: "Dosa.jpg",name:"Dosa",price:"50"},
    { imageUrl: "vegburger.png",name:"Vegburger",price:"200"}, 
    { imageUrl: "vegpizza.jpg",name:"vegpizza",price:"150"},
     { imageUrl: "vegmanchurian.jpg",name:"vegmanchurian",price:"250"}];
// displaying images 
        let content = "";
        var count = 0;
        for (let img of images) {

            content = content +
             `
             <div class="vegdiv">
                
                  
           <a href="addcart.html"><img src="images/${img.imageUrl}" alt="veg-biryani"></a><br>
            
               <p>${img.name}</p>
               <p>${img.price}</p>
             
            </div>`;
            count = count + 1;
            if (count == 2) {
                content = content + `<br>`;
                count = 0;
            }
        }

        document.querySelector("#vegcontainer").innerHTML = content;

