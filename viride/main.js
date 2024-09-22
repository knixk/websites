function selector(element) {
  const myElem = document.querySelectorAll(element);

  if (myElem) {
    return myElem;
  }

  throw new Error("Element doesn't exist..");
}

function selectorAll(element) {
  const myElem = document.querySelectorAll(element);

  if (myElem.length == 0) {
    const msg = "Element doesn't exist..";
    console.error(msg);
    return -1;
  }

  return myElem;
}

const liTags = selectorAll(".linkss-anchor123123");

console.log(liTags);
