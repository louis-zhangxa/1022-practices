/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string[0] === 'j') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person) {
  if (person.age < 21) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age < 16) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH < 14) {
    return 'base';
  } else {
    return 'invalid';
  }
}
function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return 'Were the warner brothers!';
  } else if (name === 'dot') {
    return 'cute';
  } else {
    return 'Goodnight everybody!';
  }
}
