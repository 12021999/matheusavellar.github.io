<!DOCTYPE html>
<html>
<head>
    <title>404</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <link href="http://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="https://i.imgur.com/q266ffS.png" type="image/png">
    <link rel="icon" href="https://i.imgur.com/q266ffS.png" type="image/png">
    <style>
        body {
            background-color: #0a0a0a;
            font-family: "Open Sans";
            font-size: 30px;
            color: #ededed;
            margin: 0px;
        }
        div#main {
            height: 120px;
            top: 10%;
            background-color: #41b7d8;
            margin-top: 10%;
        }
        div#title  {
            text-align: center;
            font-family: "Bree Serif", serif;
            font-size: 85px;
        }
        div#info {
            text-align: center;
            margin-top: 10px;
            font-size: 25px;
        }
    </style>
</head>
<body>
    <div id="main">
        <div id="title">
            <span>404</span>
        </div>
        <div id="info">
            <?php
                $_messages = array(
                    "Woops.",
                    "Nothing here!",
                    "Whatever it was you were looking for... It's clearly not here.",
                    "This is like the WebPage version of a Rick Roll",
                    "I guess you need another link",
                    "Houston, we have a problem",
                    "I'll be back. Wait, maybe I won't."
                );
                echo $_messages[rand(1, count($_messages))]
            ?>
        </div>
    </div>
</body>
</html>
