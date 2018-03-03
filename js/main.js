function f()
{
	
	 
  
  var x=prompt("donner une variable ");
   var resultat=5*x-3;
   
alert("le resultat est:"+resultat);
   
}

$("#news").click(function(){
	f();
});
var imagenumber=0;
setInterval(carousel,2000);
function carousel()
{
	if(imagenumber>=4){imagenumber=0;}
		var images=["dali1","dali2","dali3"];
	
	$("#test").attr('src',"Ressources/"+images[imagenumber]+".jpg");
		imagenumber++;

}

