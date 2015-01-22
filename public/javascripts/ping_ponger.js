var player1Wins = 0;
var player2Wins = 0;
var score1Node;
var score2Node;
var tracker1;
var tracker2;

function init(containerNode) {
  score1Node = createScore('score1');
  score2Node = createScore('score2');
  tracker1 = createTracker('player1');
  tracker2 = createTracker('player2');
  var winner = document.createElement("p");
  winner.innerText = "";
  winner.id = "winner";

  containerNode.appendChild(winner);
  containerNode.appendChild(score1Node);
  containerNode.appendChild(score2Node);

  containerNode.appendChild(createButton('player1', 'Add to player 1 score', score1Node));
  containerNode.appendChild(createButton('player2', 'Add to player 2 score', score2Node));

  containerNode.appendChild(tracker1);
  containerNode.appendChild(tracker2);
}

function winnerChecker(nodeText, id) {
  if (nodeText === "11") {
    if(id === 'player1') {
      player1Wins++;
      tracker1.innerText = id + ": " + player1Wins;
    } else {
      player2Wins++;
      tracker2.innerText = id + ": " + player2Wins;
    }
    score1Node.innerText = 0;
    score2Node.innerText = 0;
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
