var player1Wins = 0;
var player2Wins = 0;

function init(containerNode) {
  var score1Node = createScore('score1');
  var score2Node = createScore('score2');
  var winner = document.createElement("p");
  winner.innerText = "";
  winner.id = "winner";

  containerNode.appendChild(winner);
  containerNode.appendChild(score1Node);
  containerNode.appendChild(score2Node);

  containerNode.appendChild(createButton('player1', 'Add to player 1 score', score1Node));
  containerNode.appendChild(createButton('player2', 'Add to player 2 score', score2Node));

  containerNode.appendChild(createTracker('player1'));
  containerNode.appendChild(createTracker('player2'));
}

function winnerChecker(nodeText, id) {
  if (nodeText === "11") {
    if(id === 'player1') {
      player1Wins++;
    } else {
      player2Wins++;
    }
    return (id + " wins!");
  }
}

function createTracker(id){
  var tracker = document.createElement("P");
  if (id === 'player1') {
    tracker.innerText = id + ": " + player1Wins;
  } else {
    tracker.innerText = id + ": " + player2Wins;
  }
  tracker.id = id + "Tracker";
  return(tracker);
}

function createButton(id, text, scoreNode){
  var button = document.createElement("BUTTON");
  button.id = id;
  button.innerText = text;
  button.addEventListener('click', function() {
    scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
    winner.innerText = winnerChecker(scoreNode.innerText, id);
  });
  return(button);
}

function createScore(id) {
  var score = document.createElement("P");
  score.innerText = 0;
  score.id = id;

  return(score);
}
