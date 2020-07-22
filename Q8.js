function check(value) {
  var dob = new Date(value);
  console.log(dob.toUTCString());
  var ndate = new Date();
  var years = ndate.getFullYear() - dob.getFullYear();
  years--;
  var months = 12 - dob.getMonth();
  var days = ndate.getDay() - dob.getDay() + 1;

  console.log(years, "", months, "", days);
}

check("aug 03 1996");
