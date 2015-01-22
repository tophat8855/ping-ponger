describe('ping ponger', function() {
  beforeEach(function() {
    var container = document.querySelector("#jasmine_content");
    init(container);
  });

  afterEach(function() {
    var container = document.querySelector("#jasmine_content");
    container.innerHTML = "";
  });

  it('increments the score when the button is clicked', function() {

    var scoreNode = document.querySelector('#score1');
    var buttonNode = document.querySelector('#player1');

    expect(scoreNode.innerText).toEqual('0');

    buttonNode.click();

    expect(scoreNode.innerText).toEqual('1');
  });

  it('increments player 2 score when player 2 button is clicked', function() {
    var scoreNode2 = document.querySelector('#score2');
    var buttonNode2 = document.querySelector('#player2');

    expect(scoreNode2.innerText).toEqual('0');

    buttonNode2.click();

    expect(scoreNode2.innerText).toEqual('1');
  });

  it('announces winner when score of 11 is reached', function() {
    var scoreNode2 = document.querySelector('#score2');
    var buttonNode2 = document.querySelector('#player2');
    var announceWinner = document.querySelector('#winner');

    for (var i = 0; i < 11; i++) {
      buttonNode2.click();
    }

    expect(scoreNode2.innerText).toEqual('11');
    expect(announceWinner.innerText).toEqual('player2 wins!');
  });

  it('keeps track of game wins for each player', function() {
    var buttonNode2 = document.querySelector('#player2');
    var buttonNode1 = document.querySelector('#player1');
    var winnerTracker1 = document.querySelector('#player1Tracker');
    var winnerTracker2 = document.querySelector('#player2Tracker');

    for (var i = 0; i < 11; i++) {
      buttonNode2.click();
    }

    for (var j = 0; j < 11; j++) {
      buttonNode1.click();
    }

    expect(winnerTracker1.innerText).toEqual('player1: 1');
    expect(winnerTracker2.innerText).toEqual('player2: 1');
  });
});
