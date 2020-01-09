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