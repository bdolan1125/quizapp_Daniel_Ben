
// const STORE = {
//   5 or more questions are required
//   questions: [
//     {
//       question: 'Which battle royale focuses on building?',
//       answers: [
//         'H1Z1',
//         'Apex Legends',
//         'Fortnite',
//         'Totally Accurate Battle Royale'
//       ],
//       correctAnswer: 'Fortnite'
//     },
//     {
//       question: 'What was the first battle royale to implement a respawn feature?',
//       answers: [
//         'Apex Legends',
//         'Fortnite',
//         'PUBG',
//         'Realm Royale'
//       ],
//       correctAnswer: 'Apex Legends'
//     },
//     {
//       question: 'In Player Unknown\'s BattleGrounds (PUBG) which melee weapon is the strongest?',
//       answers: [
//         'Baseball Bat',
//         'Machete',
//         'Crowbar',
//         'Frying Pan'
//       ],
//       correctAnswer: 'Frying Pan'
//     },
//     {
//       question: 'Which battle royale features all skins for free?',
//       answers: [
//         'Apex Legends',
//         'Totally Accurate Battle Royale',
//         'PUBG',
//         'Realm Royale'
//       ],
//       correctAnswer: 'Totally Accurate Battle Royale'
//     },
//     {
//       question: 'Which battle royale was the first to feature cross console play?',
//       answers: [
//         'Apex Legends',
//         'Fortnite',
//         'PUBG',
//         'Realm Royale'
//       ],
//       correctAnswer: 'Fortnite'
//     }
//   ],
//   questionNumber: 0,
//   score: 0
// };

function renderStartPage(){
const startView = (`<h2>Welcome to the Battle Royale Quiz</h2>
<button type="button" class="start-quiz">Start Quiz</button>`);
$('main').html(startView);
console.log(renderStartPage)
}

//Renders question page when called
function renderQuestionPage(){
  const questionView = (`<h2 class="question-number">Question X</h2>
<p class="question-text">Question Text?</p>
<form class="answer-list-form">
<p class="answer-list">
    <input type = "radio"
                 name = "Answer1"
                 id = "answerOne"
                 value = "1"
                 checked = "checked" />
    <label for = "Answer1">blank</label>
    <input type = "radio"
                 name = "Answer2"
                 id = "answerTwo"
                 value = "2" />
    <label for = "Answer2">blank</label>
    <input type = "radio"
                 name = "Answer3"
                 id = "answerThree"
                 value = "3" />
    <label for = "Answer3">blank</label>
    <input type = "radio"
                 name = "Answer4"
                 id = "answerFour"
                 value = "4" />
    <label for = "Answer4">blank</label>
</p>
</form>
<button type="button" class="submit">Submit</button>`)
$('main').html(questionView);
}

//Renders correct answer pages of quiz app
function renderAnswerPageCorrect() {
  const correctAnswerView = (`<h2 class="correct-answer"> Correct! </h2>
  <p class="correct-answer">
      You are absolutely right.
  </p>
  <button type="button" class="next-question">Next Question</button>`)
  $('main').html(correctAnswerView);
}

function renderAnswerPageIncorrect() {
  const incorrectAnswerView = (`<h2 class="incorrect-answer"> Incorrect! </h2>
  <p class="incorrect-answer">
      The correct answer is: 
  </p>
  <button type="button" class="next-question">Next Question</button>`)
  $('main').html(incorrectAnswerView);
}
//Renders incorrect answer pages of quiz app

function renderResultsPage()
  const resultView = (`<h2>Score</h2>
  <button type="button" class="start-over">Play Again</button>`)
  $('main').html(resultView);
//Renders result page of quiz app

function quizStarter(){
  $('main').on('click 13', '.start-quiz', event => {
    renderQuestionPage();
  });
}

//listens for click events on start button
//calls renderQuestionPage()


//listens for submit events in form
//calls answerChecker() with form value
function answerSubmitter() {
  $('main').on('click', '.submit-answer', event => {
    console.log('hello');
    renderAnswerPageCorrect();
  });
}

//function answerChecker()
//receives value from answerSubmitter()
//compares supplied value with correct value
//if === calls renderAnswerPageCorrect()
//else !== calls renderAnswerPageIncorrect()

//function nextQuestion()
//listens for click events on next question button
//if index not last question calls renderQuestionPage() for question at defined index
//if index is that of last question calls renderResultPage()

//LOOP ABOVE FUNCTIONS until STORE is exhausted

//function playAgain()
//listens for click events on play again button
//calls renderStartPage

//function scoreCounter()
//refers to const which displays score
//++ to score const upon call

function handleQuizApp(){
  renderStartPage();
  quizStarter();
  // nextQuestion();
  // playAgain();
  // answerChecker();
  answerSubmitter();
}
$(handleQuizApp);


/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */