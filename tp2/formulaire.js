function validation() {
    if(document.getElementById("Nom").value.length<5){
return document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    }    
else if(document.getElementById("Prénom").value.length<5){
return document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
    }
else if(document.getElementById("Adresse").value.length<5){
return document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
}
else if(document.getElementById("Mail").value.length<5){
return document.getElementById("error").innerHTML = "La saisie du mail est obligatoire";
}
else{
return document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
}
}