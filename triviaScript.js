var arr_quizes = [
  {
  question: 'How many stars was on the first flag of USA?',
  answer: [47,26,13,50],
  correct: 13
  },
  {
  question: 'when world war 1 ended?',
  answer: [1936,1918,1905,1945],
  correct: 1918
  },
  {
  question: 'In what year did Christopher Columbus land in North America?',
  answer: [1492,1520,1660,1876],
  correct: 1492
  },
  {
  question: 'Joseph Stalin was the premiere of which country?',
  answer: ['Yugoslavia','Ukraine','Russia','Soviet Union'],
  correct: 'Soviet Union'
   },
   {
  question: 'John F. Kennedy was assassinated in',
  answer: ['Dallas','Las Vegas','New York','Delaware'],
  correct: 'Dallas'
   },
   {
    question: 'What was the first country to give women the vote in 1893?',
    answer: ['USA','United Kingdom','New Zealand','Iceland'],
    correct: 'New Zealand'
   },
   {
    question: 'What year did the Berlin Wall fall?',
    answer: [1992, 1989, 1994, 1990],
    correct: 1989
   },
   {
    question: 'In which year did the Euro completely replace many European currencies?',
    answer: [2012, 1983, 1998, 2002],
    correct: 2002
   },
   {
    question: 'Who were the first people to ever successfully climb Mount Everest on May 29, 1953?',
    answer: ['Tenzing Norgay and Edmund Hillary', 'Nico Rusxi and Elliot Fargoe', 'Edward Norway and Tzing Nuray', 'Edmun Guster and Goll Zing'],
    correct: 'Tenzing Norgay and Edmund Hillary'
   },
   {
    question: 'Nelson Mandela was the President of which country from 1994 until 1999?',
    answer: ['Algeria', 'Ethiopia', 'South Africa', 'Zimbabwe'],
    correct: 'South Africa'
   },
  ]


let runningQuestion = 0;
let lastQuestionsInIndex = arr_quizes.length - 1;

/* start */
function startTheQuizs(){
  start.style.display = "none"
  createQuizs();
  quizs.style.display = "block";
}

function createQuizs(){
new Quizs (arr_quizes[runningQuestion].question.toUpperCase(),arr_quizes[runningQuestion].answer,arr_quizes[runningQuestion].correct);
}

/* check the answer + next question + results */
let cont = 0;
function checkMyAnswer(btn_id){
 if(btn_id == arr_quizes[runningQuestion].correct){
   cont += 10;
   document.getElementById(btn_id).style.backgroundColor = "green";
 }else{
   document.getElementById(btn_id).style.backgroundColor = "pink";
 }
   point.innerHTML = cont;
 if(runningQuestion < lastQuestionsInIndex){
   runningQuestion++;
   createQuizs()
 }else{
   quizs.style.display = "none";
   over.style.display = "block";
   results.innerHTML = "YOUR SCOUR IS : " + cont;
 }
}
/* start again */
function startAgain(){
 over.style.display = "none";
 runningQuestion = 0
 lastQuestionsInIndex;
 cont = 0;
 point.innerHTML =  cont;
 createQuizs();
 quizs.style.display = "block";
}




