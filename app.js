/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which battle royale focuses on building?',
      answers: [
        'H1Z1',
        'Apex Legends',
        'Fortnite',
        'Totally Accurate Battle Royale'
      ],
      correctAnswer: 'Fortnite'
    },
    {
      question: 'What was the first battle royale to implement a respawn feature?',
      answers: [
        'Apex Legends',
        'Fortnite',
        'PUBG',
        'Realm Royale'
      ],
      correctAnswer: 'Apex Legends'
    }
    {
      question: 'In Player Unknown\'s BattleGrounds (PUBG) which melee weapon is the strongest?'
      answers: [
        'Baseball Bat',
        'Machete',
        'Crowbar',
        'Frying Pan'
      ],
      correctAnswer: 'Frying Pan'
    }
    {
      question: 'Which battle royale features all skins for free?',
      answers: [
        'Apex Legends',
        'Totally Accurate Battle Royale',
        'PUBG',
        'Realm Royale'
      ],
      correctAnswer: 'Totally Accurate Battle Royale'
    }
    {
      question: 'Which battle royale was the first to feature cross console play?',
      answers: [
        'Apex Legends',
        'Fortnite',
        'PUBG',
        'Realm Royale'
      ],
      correctAnswer: 'Fortnite'
    }
  ],
  questionNumber: 0,
  score: 0
};

renderStartPage()
//Renders start page of Quiz App
renderQuestionPage()
//Renders question pages of Quiz App
renderAnswerPageCorrect()
//Renders correct answer pages of quiz app
renderAnswerPageIncorrect()
//Renders incorrect answer pages of quiz app
renderResultsPage()
//Renders result page of quiz app

quizStarter()
//listens for click events on start button
//calls renderQuestionPage()

answerSubmitter()
//listens for submit events in form
//calls answerChecker() with form value

answerChecker()
//receives value from answerSubmitter()
//compares supplied value with correct value
//if === calls renderAnswerPageCorrect()
//else !== calls renderAnswerPageIncorrect()

nextQuestion()
//listens for click events on next question button
//calls renderQuestionPage()

//LOOP ABOVE FUNCTIONS until STORE is exhausted

playAgain()
//listens for click events on play again button
//calls renderStartPage

scoreCounter()
//refers to const which displays score
//++ to score const upon call



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