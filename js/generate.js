import { getRandom, createNonrepeatRandomId } from "./random.js";
import { data } from "./data.js";

// ─────  ─────

let count = 25;
let maxRandomComments = 30;

const id = createNonrepeatRandomId(1, count);
const maxIdComment = 500;
const photoId = createNonrepeatRandomId(1, count);

function generateCard() {
  return {
    id: id(),
    url: `photos/${photoId()}.jpg`,
    description: getRandom(data.descriptionsList),
    likes: getRandom([15, 200]),
    comments: generateCommentsArray(getRandom(maxRandomComments)),
  };
}

function generateCardsArray(params) {
  let array = [];

  for (let index = 0; index < params; index++) {
    array.push(generateCard());
  }

  return array;
}

function generateComment(params) {
  return {
    id: params(),
    avatar: `img/avatar-${getRandom(6)}.svg`,
    message: getRandom(data.messageList),
    name: getRandom(data.nameList),
  };
}

function generateCommentsArray(params) {
  const idComment = createNonrepeatRandomId(1, maxIdComment);

  let array = [];

  for (let index = 0; index < params; index++) {
    array.push(generateComment(idComment));
  }

  return array;
}

// console.log(
//   "test object : ",
//   generateCardsArray(count)
//   // JSON.stringify(generateCardsArray(count), null, 2)
// );
