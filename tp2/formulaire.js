function validation() {

    document.getElementById("erreur").innerHTML ="";
    document.getElementById("erreur").style.visibility ="visible";

if(document.getElementById("Nom").value.length<5){
 document.getElementById("erreur").innerHTML = "La saisie du nom est obligatoire";
   }   
else if(document.getElementById("Prénom").value.length<5){
 document.getElementById("erreur").innerHTML = "La saisie du prénom est obligatoire";
   }
else if(document.getElementById("Adresse").value.length<5){
 document.getElementById("erreur").innerHTML = "La saisie de l'adresse est obligatoire";
 }
else if(document.getElementById("Mail").value.length<5){
 document.getElementById("erreur").innerHTML = "La saisie du mail est obligatoire";
 }
else{
    
    document.getElementById("erreur").style.visibility ="hidden";
    document.getElementById("resultat").style.visibility ="visible";
    document.getElementById("resultat").innerHTML = "Bienvenue "+ document.getElementById("Nom").value ;
 }
}