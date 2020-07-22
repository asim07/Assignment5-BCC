function palimdrome(value) {
  var check = "";
  for (i = value.length - 1; i >= 0; i--) {
    check += value[i];
  }
  if (check === value) {
    return true;
  } else {
    return false;
  }
}

if (palimdrome("madam")) {
  console.log("the word is palindrome");
} else {
  console.log("Not palindrome");
}
