<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body class='container'>
        <?php
            $dico = fopen('dico.txt', 'r');
            $chosen_line = rand(1, 73200);
            $wordToFind = "";
            for ($i=0; $i<$chosen_line; $i++){
                 $wordToFind = fgets($dico);
            }
            fclose($dico);
        ?>
        <h1 class='text-center'>Jeu du pendu</h1>
        <div class='container-pendu'>
            <div class="pendu"></div>
            <div id="word_to_find" hidden><?= $wordToFind ?></div>
            <form action="#">
                <input type="text" id="letter" maxlength="1" placeholder="Choisir une lettre" required>
                <input type="submit" id="click_me" value="Envoyer">
            </form>
            <div id="letters_container"></div>
        </div>
        <script
                src="https://code.jquery.com/jquery-3.2.1.min.js"
                integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
                crossorigin="anonymous"></script>
        <script type="text/javascript" src="./pendu.js"></script>
    </body>
</html>