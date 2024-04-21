function getRandom(data = 2, round = 1) {
  let type = typeof data;
  let rand;
  let roundKompensate = 1;
  let min = 1;
  let max;

  while ((round ?? round) && !Number.isInteger(roundKompensate * round)) {
    roundKompensate = roundKompensate * 10;
  }

  switch (type) {
    case "number":
      max = data;
      break;

    case "string":
      max = data.length;
      break;

    case "object":
      if (
        data.length > 2 ||
        !data.every((element) => {
          return typeof element === "number";
        })
      ) {
        min = 0;
        max = data.length - 1;
        type = "list";
        break;
      }

      min = Math.min(...data);
      max = Math.max(...data);
      break;
  }

  rand = Math.random() * (max - min) + min;

  if (round > 0) {
    let roundInteger = Math.round(rand / round);

    if (Object.is(roundInteger, -0)) {
      roundInteger = 0;
    } else {
      rand = (roundInteger * (round * roundKompensate)) / roundKompensate;
    }
  }

  // console.log("test :  type:", type);
  // console.log("test min: ", min);
  // console.log("test max: ", max);
  // console.log("test :  randNumber:", randNumber);

  if (type === "list") {
    rand = data[rand];
  }

  return rand;
}

// ─────  ─────

function createNonrepeatRandomId(min, max) {
  const usedId = [];
  let maxIdList = max - min;
  let lastId;
  let currentId = getRandom([min, max]);

  return function () {
    if (usedId.length - 1 >= maxIdList) {
      if (lastId == null) {
        return null;
      }

      console.log("All numbers from the range from " + min + " to " + max);

      currentId = null;
      lastId = currentId;
      return currentId;
    }

    while (usedId.includes(currentId)) {
      currentId = getRandom([min, max]);
    }

    usedId.push(currentId);
    lastId = currentId;
    // console.log("test :  currentId:", currentId);
    return currentId;
  };
}

export { getRandom, createNonrepeatRandomId };
