// usar any somente em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage("Hello, World!"));
console.log(showMessage([1, 2, 3]));
