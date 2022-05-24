// JavaScript Document
 
 function ExePalindromo(){
	 
		var Deletrear= document.getElementById("palabra").value;
		var Rest = "";
		
		for (i = Deletrear.length-1; i >= 0; i--){
			Rest = Rest+ Deletrear[i]
		}
		
		if (Deletrear == Rest){
		document.getElementById("Resultado"). value = Rest + " La palabra es palindroma ";
		}else{
		document.getElementById("Resultado"). value = Rest + " NO es palindroma";
		}
}

