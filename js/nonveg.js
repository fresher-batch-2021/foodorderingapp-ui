var images = [{ id:1,imageUrl: "chicken briyani.jpg",name:"chicken briyani",price:"159/- "},
{ imageUrl: "mutton briyani.jpg",name:"mutton briyani",price:"200/-"}, 
{ imageUrl: "mushroom briyani.jpg",name:"mushroom briyani",price:"150/-"},
{ imageUrl: "chicken rice.png",name:"chicken briyani",price:"200/-"}, 
{ imageUrl: "Shawarma.jpg",name:"shawarma",price:"150/-"},
{ imageUrl: "tantoorichicken.jpg",name:"tantoorichicken",price:"250/-"}];

   let content = "";
   var count = 0;
   for (let img of images) {

       content = content +
        `
       <div class="nonvegcontainer">
           
             
             <a href="addcart.html"><img class = "nonvegimg"src="images/${img.imageUrl}" alt="chickenbiryani"></a><br>
       
          <p>${img.name}</p>
          <p>${img.price}</p>
        
       </div>`;
      count = count + 1;
       if (count == 2 ) 
         {
          content = content + `<br>`;
           count = 0;
       }
   
      }
   document.querySelector("#nonvegcontainer").innerHTML = content;

      
