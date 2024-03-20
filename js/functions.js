function checkLength(string, check) {
  if (string.length >= check) {
    return true;
  }
  return false;
}

// console.log("test checkLength: ", checkLength("проверяемая строка", 20));
// console.log("test checkLength: ", checkLength("проверяемая строка", 18));
// console.log("test checkLength: ", checkLength("проверяемая строка", 10));

// ─────  ─────

function checkPolindrom(string) {
  string = string.toLowerCase();
  let stringReverse = "";

  while (string.indexOf(" ") >= 0) {
    string = string.replace(" ", "");
  }

  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse = stringReverse + string[i];
  }

  if (string == stringReverse) {
    return true;
  }
  return false;
}

// console.log("test :", checkPolindrom("топот"));
// console.log("test :", checkPolindrom("ДовОд"));
// console.log("test :", checkPolindrom("Кекс"));
// console.log("test :", checkPolindrom("Лёша на полке клопа нашёл "));

// ─────  ─────

function getOnlyNumber(string) {
  string = string.toString();

  let newStrig = "";

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      newStrig = newStrig + string[i];
    }
  }

  // console.log("test :  parseInt(newStrig):", parseInt(newStrig))

  return parseInt(newStrig);
}

// getOnlyNumber("2023 год"); // 2023
// getOnlyNumber("ECMAScript 2022"); // 2022
// getOnlyNumber("1 кефир, 0.5 батона"); // 105
// getOnlyNumber("агент 007"); // 7
// getOnlyNumber("а я томат"); // NaN
// getOnlyNumber(2023); // 2023
// getOnlyNumber(-1); // 1
// getOnlyNumber(1.5); // 15
