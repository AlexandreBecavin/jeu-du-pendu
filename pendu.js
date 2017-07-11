
    /*************************************************************
     * déclaration des variables et des fonctions
     *****************************************************/
    var word_to_find = $('#word_to_find').text();

    var submited_letters = [];
    var number_of_success = 0 ;
    var number_of_errors = 0;

    //afficher les lettres et les espaces vides en fonction de ou en est l'utilisateur
    function show_letter() {

        var letters_container_html = "";
        for(var i= 0; i<word_to_find.length -1; i++){
            if($.inArray(word_to_find.charAt(i), submited_letters) == -1){
                letters_container_html += "<span style='margin: 10px'>_</span>"
            }else {
                letters_container_html += word_to_find.charAt(i);
            }
        }
        $('#letters_container').html(letters_container_html);
    }

    //function changement du sprite
    function change_sprite() {
        var decal_sprite = -75*number_of_errors;
        console.log(number_of_errors);
        console.log(decal_sprite);
        $('.pendu').css("background-position" ,  decal_sprite + "px 0")

    }

    //function afficher les lettres ratées
    function wrong_letters(){

    }
    //function afficher les lettres ratées
    function success(){
        if (number_of_success == word_to_find.length){
            alert("Vous Avez Congratulisaté !!!!")
        }
    }

    //receptionne et traite la requete de l'utilisateur,
    function input_reception() {
        var user_letter = $('#letter').val().toUpperCase();
            if ($.inArray(user_letter, submited_letters) === -1) {
                submited_letters.push(user_letter);
                var is_matching = false;
                for(var i= 0; i<word_to_find.length -1; i++) {
                    if (word_to_find.charAt(i) === user_letter) {
                        is_matching = true;
                        number_of_success++;
                    }
                }
                if(is_matching){

                    success();
                    show_letter();
                }else {
                    number_of_errors++;
                }


                change_sprite();
                wrong_letters();
            }
            else {
                alert("la lettre "+ user_letter + " à déja été tentée !")
            }
    }

    /*************************************************************
     * EXECUTION
      *****************************************************/
    $(document).ready(function () {
//on affiche le nombre de lettres à trouver
    show_letter(function () {
        
    });

//au click on lance la fonction qui traitel'input de l'user
    $('#click_me').click(function(){input_reception()});

});