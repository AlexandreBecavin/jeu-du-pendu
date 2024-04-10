/*************************************************************
 * déclaration des variables et des fonctions
 *****************************************************/
var word_to_find = $('#word_to_find').text();

var submited_letters = [];
var number_of_success = 0;
var number_of_errors = 0;

var alaphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//afficher les lettres et les espaces vides en fonction de ou en est l'utilisateur
function show_letter() {
    var letters_container_html = "";
    for(var i= 0; i<word_to_find.length -1; i++){
        if($.inArray(word_to_find.charAt(i), submited_letters) == -1){
            letters_container_html += "<span style='margin: 10px'>_</span>"
        }else {
            letters_container_html += word_to_find.charAt(i);
            // letters_container_html += "<span style='margin: 10px'>" + word_to_find.charAt(i) + "</span>";
        }
    }
    $('#letters_container').html(letters_container_html);
}

function change_sprite() {
    var decal_sprite = -75 * number_of_errors;
    $('.pendu').css("background-position", decal_sprite + "px 0");
}

//function afficher les lettres ratées
function success(){
    if (number_of_success == word_to_find.length){
        $('#gameOverModal').show();
    }
}


function displayRandomLetter() {
    var last_letter = submited_letters[submited_letters.length - 1];
    console.log(submited_letters)
    console.log(submited_letters.indexOf(last_letter))

    if (last_letter && $.inArray(last_letter, submited_letters.slice(0, -1) === -1)  && submited_letters.includes(last_letter) ) {
        var last_letter =  $('#letter').val().toUpperCase();
        var colors = ["red", "blue", "green", "orange", "purple", "black"]; // Liste de couleurs
        var sizes = ["24px", "32px", "40px", "60px", "80px", "120px"]; // Liste de tailles de police
        var fonts = ["Arial", "Verdana", "Helvetica", "Georgia", "Times New Roman", "Courier New"]; // Liste de polices de caractères

        var random_color = colors[Math.floor(Math.random() * colors.length)]; // Choix aléatoire d'une couleur
        var random_size = sizes[Math.floor(Math.random() * sizes.length)]; // Choix aléatoire d'une taille
        var random_font = fonts[Math.floor(Math.random() * fonts.length)]; // Choix aléatoire d'une police de caractères

        var random_position_left = Math.floor(Math.random() * ($(document).width() - 100)); // Position aléatoire horizontale
        var random_position_top = Math.floor(Math.random() * ($(document).height() - 100)); // Position aléatoire verticale

        if(word_to_find.includes(last_letter))
        {
            var letter_html = "<span  class='letter' style='color:" + random_color + "; font-size:" + random_size + "; font-family: " + random_font + "; position: absolute; left:" + random_position_left + "px; top:" + random_position_top + "px;'>" + last_letter + "</span>";
        }
        else{
            var letter_html = "<span class='letter' style='color:" + random_color + "; font-size:" + random_size + "; font-family: " + random_font + "; position: absolute; left:" + random_position_left + "px; top:" + random_position_top + "px; text-decoration: line-through red'>" + last_letter + "</span>";
        }

        $('body').append(letter_html); // Ajout de la lettre aléatoire au corps du document
    }
}

//receptionne et traite la requete de l'utilisateur,
function input_reception() {
    var user_letter = $('#letter').val().toUpperCase();
    if(alaphabet.includes(user_letter.toUpperCase()))
    {
        if ($.inArray(user_letter, submited_letters) === -1) {
            submited_letters.push(user_letter);
            displayRandomLetter()
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
                if (number_of_errors >= 6) { // Vérification pour la défaite
                    $('#correctWord').text(word_to_find);
                    $('#gameLostModal').show();
                }
            }


            change_sprite();
            $('#letter').val('');
            wrong_letters();
        }
        else {
            $('#letter').val('');
            alert("la lettre "+ user_letter + " à déja été tentée !")
        }
    }
    else{
        alert("la lettre "+ user_letter + " n'est pas une lettre valide")
    }
}

function resetGame() {
    submited_letters = [];
    number_of_success = 0;
    number_of_errors = 0;

    $('#gameOverModal').hide();
    $('#gameLostModal').hide();

    show_letter();
    change_sprite();
    $('#letter').val('');
    $('span.letter').remove();
}

$(document).ready(function () {
    show_letter();
    $('#click_me').click(function () { input_reception(); });
});
