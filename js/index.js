var p = {
  // activeQuestion: false,
  // activeAnswer: false,
  questions: document.querySelectorAll(".question"),
  answers: document.querySelectorAll(".answer"),
  question: null,
  answer: null,
  cubo: document.querySelector(".box-image"),
  arrows: document.querySelectorAll(".question img"),
  arrow: null,
  contador: 0,
};

var m = {
  inicio: function () {
    for (var i = 0; i < p.questions.length; i++) {
      // p.questions[i].addEventListener("click", m.deploy);
      p.questions[i].addEventListener("mouseover", m.boxMoveLeft);
      p.questions[i].addEventListener("mouseout", m.boxMoveRight);
      p.questions[i].addEventListener("click", (e) => {
        p.question = e.target;
        var value = e.target.getAttribute("value");
        p.answer = p.answers[value];
        console.log(p.question);
        if (p.question.classList.contains("activeQuestion")) {
          p.question.classList.remove("activeQuestion");
          p.answer.classList.remove("activeAnswer");
          p.contador--;
          console.log(p.contador);
          if (p.contador == 0) {
            // }
            p.arrows[value].style.transform = "rotateX(360deg)";
            p.arrows[value].style.transition = ".4s all ease-in-out";
          }
        } else {
          p.question.classList.add("activeQuestion");
          p.answer.classList.add("activeAnswer");
          p.arrows[value].style.transform = "rotateX(180deg)";
          p.arrows[value].style.transition = ".8s all ease-in-out";
          p.contador++;
          console.log(p.contador);
          p.answer.style.animationName = "fadeDown";
          console.log("nextSiblin", p.question.nextElementSibling);
        }
      });
    }
  },
  boxMoveLeft: function (e) {
    console.log("hover", e.target);
    p.cubo.style.left = "-130px";
    p.cubo.style.transition = "0.5s all ease-in-out";
    // deploy: function (e) {
    //   console.log("Estoy en deploy");
    //   console.log(p.question);
    //   // console.log(p.activeAnswer);

    // p.question = e.target.getAttribute("value");
    // p.answer = p.answers[p.question];

    // if (p.activeQuestion == false) {
    //   if (p.contador == 0 || p.contador > 0) {
    //     p.contador++;
    //     p.answer.style.display = "block";
    //     p.answer.style.animationName = "fadeDown";
    //     p.answer.style.animationDuration = "1s";
    //     console.log("activeQuestion", p.activeQuestion);
    //     console.log("contador", p.contador);
    //   } else if (p.contador > 0 && p.answer) {
    //     p.activeAnswer = false;
    //     p.activeQuestion = true;
    //   }
    // } else {
    //   p.activeQuestion = false;
    //   p.answer.style.display = "none";
    //   p.answer.style.transition = "1s transition ease-in-out";
    //   console.log("activeQuestion", p.activeQuestion);
    //   p.activeAnswer = false;
    //   p.contador = 0;
    // }
    // },
  },
  boxMoveRight: function (e) {
    p.cubo.style.left = "-95px";
    p.cubo.style.transition = "0.5s all ease-in-out";
  },
};

m.inicio();
