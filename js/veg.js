$("#header").load("header.html") 
var vegs=[{imageurl:"veg-biryani.jpg" ,name:"veg1",price:"120"},
{imageurl:"vegnoodles",name:"veg2",price:"150"},
{imageurl:"Dosa" ,name:"veg3",price:"50"},
{imageurl:"vegburger.png",name:"veg4",price:"156"},{imageurl:"vegpizza",name:"veg5",price:"150"},{imageurl:"vegmanchurian",name:"veg6",price:"300"}];
let content="";
var count =0;
for(let veg of vegs)
{
     content=content+ `
    <div class="vegrow">
     <img class="vegimg" src="images/${veg.imageurl}" alt="img"></a><br>
    <p>vegname = ${veg.name}</p>
    <p>vegprice = ${veg.price}</p>
<a href="order.html">ordernow</a>
</div>`;  
count=count+1;  
if(count==3)
    {
        content=content+ `<br>`;
        count=0;
    }

document.querySelector("#container").innerHTML=content;
}