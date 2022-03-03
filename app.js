$("#rollButton").click(function () {
  new Die();
  //! add dice rolling soundeffect
});
$("#addButton").click(function () {
  addDie();
});

function addDie() {
  let dieSum = 0;
  Die.dieContainer.forEach((d) => {
    dieSum += d.value;
  });

  console.log(dieSum);
  let dieTotal = document.createElement("h1");
  dieTotal.textContent = dieSum;
  document.body.appendChild(dieTotal);
  setTimeout(function () {
    dieTotal.remove();
  }, 2500);
}

class Die {
  static id = 1;
  static dieContainer = [];

  constructor() {
    this.value = this.randNum(); //set value
    this.die = document.createElement("div");
    this.die.className = "border p-2 justify-content-start flex-wrap bg-danger";
    $("#die-container").append(document.body.appendChild(this.die));
    this.die.textContent = `${this.value}`;
    Die.dieContainer.push(this);
    Die.id++;
    $(this.die).click(() => {
      this.value = this.randNum();
      this.die.textContent = `${this.value}`;
    });

    $(this.die).dblclick(() => {
      this.die.remove();
      let dieIndex = Die.dieContainer.indexOf(this);
      Die.dieContainer.splice(dieIndex, 1);
    });

    //// this.value_div = document.createElement("div");
  }
  randNum() {
    return Math.floor(Math.random() * 6) + 1;
  }

  dieRoll() {
    document.getElementById("rollButton").addEventListener("click");
  }
}

// myButton = document.getElementById("rollButton");
// myButton.addEventListener("click", () => {
//   dieContainer.createElement("div");
// });
