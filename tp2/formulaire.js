function validation() {

    document.getElementById("error").innerHTML ="";
    document.getElementById("error").style.visibility ="";

    if(document.getElementById("Nom").value.length<5){
 document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    }    
    if(document.getElementById("Prénom").value.length<5){
 document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
    }
 if(document.getElementById("Adresse").value.length<5){
 document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
}
 if(document.getElementById("Mail").value.length<5){
 document.getElementById("error").innerHTML = "La saisie du mail est obligatoire";
}
if{
 document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
}
}