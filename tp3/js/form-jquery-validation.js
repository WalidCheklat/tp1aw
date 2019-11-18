$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );

    $("form").on("submit", function (event) {
        event.preventDefault();
  
   if ($("#nom").val()==""){
    $(".modal-body").text("Veuillez saisir votre nom");
    $('#myModal').modal("show");
    }
    
   if ($("#prénom").val()==""){
    $(".modal-body").text("Veuillez saisir votre prénom");
    $('#myModal').modal("show");
    }

   if ($("#date").val()==""){
    $(".modal-body").text("Veuillez saisir votre date de naissance");
    $('#myModal').modal("show");
    }

   if ($("#email").val()==""){
    $(".modal-body").text("Veuillez saisir votre email");
    $('#myModal').modal("show");
    }

   if ($("#adresse").val()==""){
    $(".modal-body").text("Veuillez saisir votre adresse");
    $('#myModal').modal("show");
    }



  }); 
     
 });