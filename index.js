document.addEventListener("DOMContentLoaded", function(){
  const body = document.querySelector("body")
  const begin = document.querySelector(".begin")
  const target = document.querySelector(".target")

  begin.addEventListener("click", function(){
    body.classList.add("begun")
    setInterval(() => spawn(target), 240);
  })
})

let i = 0;
const start = ["Dinner", "and", "drinks"];
const options = ["dinner", "drinks"];
const and = "and"

function spawn(target){
  const span = document.createElement("span")
  const word = getWord(i++);
  span.innerText = word
  span.classList.add(word.toLowerCase())
  target.append(span)
  target.append(" ")
}

function getWord(i){
  if (start[i]) {
    return start[i]
  } else if (i % 2 == 1) {
    return and;
  } else {
    return options[Math.floor(Math.random()*options.length)];
  }
}
