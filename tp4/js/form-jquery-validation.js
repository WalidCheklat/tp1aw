$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );

    $("form").on("submit", function (event) {
        event.preventDefault();

        var a = "https://maps.googleapis.com/maps/api/staticmap?markers="+ $("#adresse").val()+ "&zoom=10&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";

   if ($("#nom").val()==""){
    $(".modal-body").text("Veuillez saisir votre nom");
    $('#myModal').modal("show");
    }
    
   if ($("#prénom").val()==""){
    $(".modal-body").text("Veuillez saisir votre prénom");
    $('#myModal').modal("show");
    }

   else if ($("#date").val()==""){
    $(".modal-body").text("Veuillez saisir votre date de naissance");
    $('#myModal').modal("show");
    }

   else if ($("#email").val()==""){
    $(".modal-body").text("Veuillez saisir votre email");
    $('#myModal').modal("show");
    }

   else if($("#adresse").val()==""){
    $(".modal-body").text("Veuillez saisir votre adresse");
    $('#myModal').modal("show");
    }

    else {
    $(".modal-title").text("Bienvenu " + $("#prénom").val());
    $(".modal-body").html("Vous êtes né le " + $("#date").val() + " et vous habitez à " + "(" + $("#adresse").val() + ")" + '<img src="'+a+'" width = "400" height = "300" />');
    $('#myModal').modal("show");
    }




  }); 
     
 });