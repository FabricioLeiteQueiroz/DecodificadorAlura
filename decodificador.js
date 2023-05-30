var texto="";
var textoSaida=[];

function criptografa() {

	texto="";
	textoSaida="";

	document.getElementById("semTexto").style.visibility="hidden";
	document.getElementById("nenhuma").style.visibility="hidden";
	document.getElementById("digite").style.visibility="hidden";
	document.getElementById("textoSaida").style.visibility="visible";
	document.getElementById("copia").style.visibility="visible";

	if(texto!=document.getElementById("texto").value){

		texto=document.getElementById("texto").value;
		
		
		for(var i=0;i<texto.length;i++){
			if(texto[i]=="a") {
				textoSaida+="ai";
			}
			else if(texto[i]=="e") {
				textoSaida+="enter";
			}
			else if(texto[i]=="i") {
				textoSaida+="imes";
			}
			else if(texto[i]=="o") {
				textoSaida+="ober";
			}
			else if(texto[i]=="u") {
				textoSaida+="ufat";
			}	
			else {
				textoSaida+=texto[i];
			}
		}
		
		document.getElementById("textoSaida").textContent="";
		
		document.getElementById("textoSaida").textContent=textoSaida;
	}
}

function edita() {
	var largura = window.innerWidth;
	
	if (largura > 600 && largura < 992) {
		document.getElementById("saida").style.height="300px";
		document.getElementById("textoSaida").style.top="3vh";
		document.getElementById("espaco").style.top="140vh";
	}
	
	else if (largura < 600) {
		document.getElementById("saida").style.height="340px";
		document.getElementById("textoSaida").style.top="3vh";
		document.getElementById("saida").style.left="5.5vw";
		document.getElementById("saida").style.width="89vw";
		document.getElementById("espaco").style.top="158vh";
	}
}

function descriptografa() {

	texto="";
	textoSaida="";

	document.getElementById("semTexto").style.visibility="hidden";
	document.getElementById("nenhuma").style.visibility="hidden";
	document.getElementById("digite").style.visibility="hidden";
	document.getElementById("textoSaida").style.visibility="visible";
	document.getElementById("copia").style.visibility="visible";

	document.getElementById("textoSaida").textContent=textoSaida;
	
	if(texto!=document.getElementById("texto").value) {

		texto=document.getElementById("texto").value;
		
		for(var i=0;i<texto.length;i++){
			if(texto[i]=="a"&&texto[i+1]=="i") {
				textoSaida+="a";
				i++;
			}
			else if(texto[i]=="e"&&texto[i+2]=="t"&&texto[i+3]=="e"&&texto[i+4]=="r") {
				textoSaida+="e";
				i+=4; 
			}
			else if(texto[i]=="i"&&texto[i+1]=="m"&&texto[i+2]=="e"&&texto[i+3]=="s") {
				textoSaida+="i";
				i+=3;
			}
			else if(texto[i]=="o"&&texto[i+1]=="b"&&texto[i+2]=="e"&&texto[i+3]=="r") {
				textoSaida+="o";
				i+=3;
			}
			else if(texto[i]=="u"&&texto[i+1]=="f"&&texto[i+2]=="a"&&texto[i+3]=="t") {
				textoSaida+="u";
				i+=3;
			}	
			else {
				textoSaida+=texto[i];
			}
		}
		
		document.getElementById("textoSaida").textContent="";

		document.getElementById("textoSaida").textContent=textoSaida;
	}
}

function copia() {
	navigator.clipboard.writeText(textoSaida);
}