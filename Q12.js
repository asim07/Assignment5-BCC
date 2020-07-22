do {
  var num = Math.ceil(Math.random() * 100);
  var guess;
  var decisoion;
  for (i = 0; i < 3; i++) {
    guess = parseInt(prompt("Enter number to guess"));
    if (guess == num) {
      decisoion = prompt(
        "You are right, You won, Press y to play again n to exit"
      );
      break;
    }
    if (i == 2) {
      decisoion = prompt("You loose, Press y to play again n to exit");
    }
  }
  if (decisoion == "y" || decisoion == "Y") {
    continue;
  } else {
    break;
  }
} while (true);
