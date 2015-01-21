function init(containerNode) {
  var score1Node = createScore('score1');
  var score2Node = createScore('score2');

  containerNode.appendChild(score1Node);
  containerNode.appendChild(score2Node);

  containerNode.appendChild(createButton('player1', 'Add to player 1 score', score1Node));
  containerNode.appendChild(createButton('player2', 'Add to player 2 score', score2Node));

}

function createButton(id, text, scoreNode){
  var button = document.createElement("BUTTON");
  button.id = id;
  button.innerText = text;
  button.addEventListener('click', function() {
    scoreNode.innerText = parseInt(scoreNode.innerText) + 1;
  })
  return(button);
}

function createScore(id) {
  var score = document.createElement("P");
  score.innerText = 0;
  score.id = id;

  return(score);
}
