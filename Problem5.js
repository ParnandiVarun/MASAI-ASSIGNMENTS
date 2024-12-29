function generatePassword(length, includeNumbers, includeSpecialChars) {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "@#$*!";

  var str = "";

  if (includeNumbers) {
    str += lowerCase + upperCase + numbers;
  }

  if (includeSpecialChars) {
    str += specialChars;
  }

  var password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * str.length);
    password += str[randomIndex];
  }
  return password;
}

var data = generatePassword(10, true, true);
console.log(data);
