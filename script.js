let counter = 1; // Set initial value to 1

function increment() {
  counter++;
}

function decrement() {
  if (counter > 1) {
    counter--;
  }
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.textContent = get(); // Use textContent to update the value
});

dec.addEventListener("click", () => {
  decrement();
  input.textContent = get(); // Use textContent to update the value
});



