function checkvowels(str) {
  var i = 0;
  var count = 0;

  while (i < str.length) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
    i++;
  }
  console.log("no of vowel : ", count);
}
checkvowels("hello im here");
