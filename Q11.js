function checkvowels(str) {
  var i = 0;
  var count = 0;
  var bool = false;

  while (i < str.length) {
    switch (str[i]) {
      case "a":
        bool = true;
        break;
      case "e":
        bool = true;
        break;
      case "i":
        bool = true;
        break;
      case "o":
        bool = true;
        break;
      case "u":
        bool = true;
        break;
    }
    i++;
  }
  return bool;
}
console.log("Word is vowel", checkvowels("hello"));
