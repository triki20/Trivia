class Quizs{
  constructor(_question,_answer,_correct){
    this.question = _question;
    this.answer = _answer;
    this.correct = _correct;
    this.addToHTML();
  }

  addToHTML(){
    questions.innerHTML = `<h1 id="theQuestion">${this.question}</h1>`;
    a0.innerHTML = `<button id="${this.answer[0]}" class="btn-block btn-hover color-1" onclick="checkMyAnswer(this.id)">${this.answer[0]}</button>`
    a1.innerHTML = `<button id="${this.answer[1]}" class="btn-block btn-hover color-1" onclick="checkMyAnswer(this.id)">${this.answer[1]}</button>`
    a2.innerHTML = `<button id="${this.answer[2]}" class="btn-block btn-hover color-1" onclick="checkMyAnswer(this.id)">${this.answer[2]}</button>`
    a3.innerHTML = `<button id="${this.answer[3]}" class="btn-block btn-hover color-1" onclick="checkMyAnswer(this.id)">${this.answer[3]}</button>`
  }
}
