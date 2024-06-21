import { getRandom, createNonrepeatRandomId } from "./random.js";
import { data } from "./data.js";

// ───── реструктуризація ─────

const { descriptionsList, messageList, nameList } = data;

// ─────  ─────

const COUNT_CARDS = 25;
const MAX_RANDOM_COMMENTS = 5;
const id = createNonrepeatRandomId(1, COUNT_CARDS);
const MAX_ID_COMMENT = 500;
const photoId = createNonrepeatRandomId(1, COUNT_CARDS);

function generateCard(paramMaxRndomComments) {
  return {
    id: id(),
    url: `photos/${photoId()}.jpg`,
    description: getRandom(descriptionsList),
    likes: getRandom([15, 200]),
    comments: generateCommentsArray(
      getRandom([0, paramMaxRndomComments]),
      MAX_ID_COMMENT
    ),
  };
}

function generateComment(paramId) {
  return {
    id: paramId(),
    avatar: `img/avatar-${getRandom(6)}.svg`,
    message: getRandom(messageList),
    name: getRandom(nameList),
  };
}

function generateCommentsArray(paramCommentsArray, paramMaxIdComment) {
  const idComment = createNonrepeatRandomId(1, paramMaxIdComment);
  const array = [];

  for (let index = 0; index < paramCommentsArray; index++) {
    array.push(generateComment(idComment));
  }

  console.log("test  array: ", array);
  return array;
}

function generateCardsArray(paramCountCards) {
  const array = [];

  for (let index = 0; index < paramCountCards; index++) {
    array.push(generateCard(MAX_RANDOM_COMMENTS));
  }

  console.log("test  array: ", array);
  return array;
}

generateCardsArray(COUNT_CARDS);

export { generateCardsArray };
