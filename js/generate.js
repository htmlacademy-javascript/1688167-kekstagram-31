import { getRandomNumber, getNonrepeatRandomId } from "./random.js";
import { DATA } from "./data.js";

// ───── реструктуризація ─────

const { descriptionsList, messagesList, namesList } = DATA;

// ─────  ─────

const COUNT_CARDS = 25;
const MAX_RANDOM_COMMENTS = 5;
const id = getNonrepeatRandomId(1, COUNT_CARDS);
const MAX_ID_COMMENT = 500;
const photoId = getNonrepeatRandomId(1, COUNT_CARDS);

function setCard(paramMaxRndomComments) {
  return {
    id: id(),
    url: `photos/${photoId()}.jpg`,
    description: getRandomNumber(descriptionsList),
    likes: getRandomNumber([15, 200]),
    comments: setCommentsArray(
      getRandomNumber([0, paramMaxRndomComments]),
      MAX_ID_COMMENT
    ),
  };
}

function setComment(paramId) {
  return {
    id: paramId(),
    avatar: `img/avatar-${getRandomNumber(6)}.svg`,
    message: getRandomNumber(messagesList),
    name: getRandomNumber(namesList),
  };
}

function setCommentsArray(paramCommentsArray, paramMaxIdComment) {
  const idComment = getNonrepeatRandomId(1, paramMaxIdComment);
  const array = [];

  for (let index = 0; index < paramCommentsArray; index++) {
    array.push(setComment(idComment));
  }

  // console.log("test  array: ", array);
  return array;
}

function setCardsArray(paramCountCards) {
  const array = [];

  for (let index = 0; index < paramCountCards; index++) {
    array.push(setCard(MAX_RANDOM_COMMENTS));
  }

  // console.log("test  array: ", array);
  return array;
}

setCardsArray(COUNT_CARDS);
