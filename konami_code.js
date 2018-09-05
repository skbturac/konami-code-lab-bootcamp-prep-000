const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
  document.body.addEventListener('keydown', e => {
    const key = e.key;
    window.alert("Hurray!");
    if (key === codes[index]) {
      index++;
   
      if (index === alphabet.length) {
        window.alert("Hurray!");
   
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}