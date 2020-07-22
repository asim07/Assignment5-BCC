function check() {
  var date = new Date();
  var weekend = date.getDay();
  if (weekend == 0) {
    console.log("Its Weekend!!");
  } else {
    console.log("Sorry! wait for ", 6 - weekend, " more days");
  }
}
check();
