<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <?php
    $dico = fopen('dico.txt', 'r');
    $chosen_line = rand(1, 73200);
    $wordToFind = "";
    for ($i = 0; $i < $chosen_line; $i++) {
        $wordToFind = fgets($dico);
    }
    fclose($dico);
    ?>
    <h1 class='text-center'>Jeu du pendu</h1>
    <div class='container-pendu'>
        <div class="pendu"></div>
        <div id="word_to_find" hidden><?= $wordToFind ?></div>
        <div id="letters_container"></div>
        <form action="#">
            <input type="text" id="letter" maxlength="1" placeholder="Choisir une lettre" required>
            <input type="submit" id="click_me" value="Envoyer">
        </form>
    </div>

    <!-- Modal Défaite -->
    <div id="gameLostModal" style="display:none; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);">
        <div style="background-color: #fefefe; margin: 10% auto; padding: 20px; border-radius: 10px; width: 50%; box-shadow: 0 4px 8px rgba(0,0,0,0.2); text-align: center;">
            <h2 style="color: #333;">Fin du Jeu</h2>
            <p style="font-size: 18px; color: #555;">Dommage ! Vous avez perdu. Le mot était : <span id="correctWord" style="font-weight: bold;"></span></p>
            <button onclick="resetGame()" style="font-size: 18px; padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;">Réessayer</button>
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./pendu.js"></script>
</body>

</html>