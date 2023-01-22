function telephoneCheck(str) {
  let newnumber = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] > "0") {
      newnumber += str[i];
    } else if (
      str[i] !== "-" ||
      str[i] !== " " ||
      str[i] !== "(" ||
      str[i] !== ")"
    ) {
      return false;
    }
    if (newnumber.length === 10) {
      return true;
    } else if (newnumber.length === 11 && newnumber[0] === 1) {
      return true;
    }
    console.log(newnumber);
  }
  return false;
}

telephoneCheck("(555)-555-5555");
