$(document).ready(function () {
  var index = 0;

  function setup() {
    index = 0;
    $('#startButton').on('click', function () {
      $(this).hide();
      countdownTimer.start();
      loadQuestion(index);
    });
  }


  var countdownTimer = {
    time: 30,
    reset: function () {
      this.time = 30;
      $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
    },
    start: function () {
      counter = setInterval(countdownTimer.count, 1000);
    },
    stop: function () {
      clearInterval(counter);
    },
    count: function () {
      countdownTimer.time--;
      console.log(countdownTimer.time);
      $('.timer').html(countdownTimer.time);
      if (countdownTimer.time >= 0) {
        $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
      }
      else {
        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
  };
  // /*








  var trivia = {

    correct: 0,
    wrong: 0,
    q1: {
      question: 'What is the worlds largest wave ever recored?',
      possibleAnswers: ['A. 30FT',
        'B. 45FT',
        'C. 62FT',
        'D. 29FT'],
      flags: [false, false, true, false],
      answer: 'C. 62FT '
    },

    q2: {
      question: ' What is the daggerboard? ',
      possibleAnswers: ['A. The name of a sword   ',
        'B. A large fin under the board  ',
        'C.  The tip of a shark fin  ',
        'D.  A perticular type of surf board  '],
      flags: [false, true, false, false],
      answer: 'B. A large fin under the board  '
    },

    q3: {
      question: ' Who won The Human Indonesian Challenge in 2001? ',
      possibleAnswers: ['A. Andy Irons  ',
        'B.  Guilherme Tamega  ',
        'C. Clay Marzo  ',
        'D.  Mickey Munoz '],
      flags: [false, true, false, false],
      answer: 'B.  Guilherme Tamega  '
    },

    q4: {
      question: ' What is the uphaul rope used for? ',
      possibleAnswers: ['A.to pull the rig out of the water ',
        'B. to pick up a surfer out of the water ',
        'C. to haul surf boards ',
        'D. to hook a lost board '],
      flags: [true, false, false, false],
      answer: 'A. to pull the rig out of the water '
    },

    q5: {
      question: ' What is it called when a surfer stands on the front of his board and wraps five toes over the front?',
      possibleAnswers: ['A. hang lose ',
        'B. Hanging five   ',
        'C.  nose on the five ',
        'D.  tiptoe '],
      flags: [false, true, false, false],
      answer: 'Hanging five '
    }
  };




  var questionArray = [trivia.q1, trivia.q2, trivia.q3, trivia.q4, trivia.q5];

  function loadQuestion(questionSelection) {
    console.log('questionSelection: ',questionSelection);
    countdownTimer.reset();
    $(".question").html( questionArray[questionSelection].question );
    $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
    $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
    $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
    $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
    //getAnswer();
    
  }

  function nextQuestion() {
    index++;
    console.log(index);
    loadQuestion(index);
  }



  function getAnswer() {

    //  nextQuestion();
    $('.answerchoice').on('click', function () {
      console.log('alert', index);
      index++;
      console.log('click', index);
      $(".question").text('');
      $("#buttonA").text('');
      $("#buttonB").text('');
      $("#buttonC").text('');
      $("#buttonD").text('');
      // loadQuestion(index);
    })
  }

  function answerCorrect() {
    trivia.correct++;
    alert("Correct!");
    console.log("correct");
  }

  function answerWrong() {
    trivia.wrong++;
    alert("Incorrect!");
    console.log("wrong");
  }

  function showScore() {
    $('.question').empty();
    $('.question').append("<h2><p>" + trivia.correct + " correct</p></h2>");
    $('.question').append("<h2><p>" + trivia.wrong + " incorrect</p></h2>");
    countdownTimer.stop();
    $('.timer').empty();
  }

  // for (var i = 0; i < questionArray.length; i++) {
  //   $('.question').append('<p>' + questionArray[i].question + '</p>');
  //   for (var j = 0; j < questionArray[i].possibleAnswers.length; j++) {
  //     $('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j] + '</button></span>');
  //   }
  // }





  $('#possibleAnswers').on('click', function () {
    console.log("click");
    countdownTimer.start();
    for (var i = 0; i < questionArray.length; i++) {
      console.log(i);

      $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
      $('.question').html(questionArray[i].question);
      while (countdownTimer != 0) {
        // TODO
      }
    };
    
  });






  
  $('.answerchoice').on('click', function () {
    console.log($(this));
    if (this.id == 'buttonA') {
      var answerChosen = 'A';
    } else if (this.id == 'buttonB') {
      answerChosen = 'B';
    } else if (this.id == 'buttonC') {
      answerChosen = 'C';
    } else if (this.id == 'buttonD') {
      answerChosen = 'D';
    }
    if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
      answerCorrect();
    } else if (answerChosen == 'A') {
      answerWrong();
    }
    if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
      answerCorrect();
    } else if (answerChosen == 'B') {
      answerWrong();
    }
    if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
      answerCorrect();
    } else if (answerChosen == 'C') {
      answerWrong();
    }
    if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
      answerCorrect();
    } else if (answerChosen == 'D') {
      answerWrong();
    }

    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    index++;
    if (index < questionArray.length) {
      loadQuestion(index);
    } else {
      $(".answerchoice").hide();
      showScore();
    }
  });


  $('#start').click(countdownTimer.start);
  setup();
});
