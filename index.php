<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paaper Bites by Janine & Monique</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <?php
    class Person {
      public $name;
      public $contact;

      public function __construct($name, $contact) {
        $this->name = $name;
        $this->contact = $contact;
      }

      public function getContactInfo() {
        return $this->name . ": ". $this->contact;
      }
    }

    $janine = new Person("Janine", "087 123 4512") ;
    $monique = new Person("Monique", "061 321 1245") ;
    ?>
    <div class="container">
        <button id="btn1" class="buttonWho">Who are we?
          <div class="info">Two ladies working off a storm in the kitchen<br>providing you with crunchy,<br>soft and less oily paaper bites to snack on!</div>
        </button>

        <button id="btn2" class="buttonFlavours">Our Flavours
          <div class="info">Sour Cream,<br>Tomato,<br>Spring Onion,<br>Mexican,<br>Salt & Vinegar,<br>Pizza,<br>Fruit Chutney,<br>Sweet Chilli</div>
        </button>

        <button id="btn3" class="buttonContact">Contact Us
          <?php
          echo "<div class=\"info\">" . $janine->getContactInfo() . "<br>" . $monique-> getContactInfo() ."</div>";
        ?>
        </button>
      </div>
    <script src="index.js"></script>
</body>
</html>