module.exports = bowlingScore;

function bowlingScore (rolls) {
  var score = 0;
  var frames = [];

  //break into frames

  for (var i = 0; i < rolls.length; i++){
    if (rolls[i] == 10) {
      frames.push([rolls[i]]);
    } else {
      frames.push([rolls[i], rolls[i+1]]);
      i++;
    }
  }

  //logic for no bonus + bonus for strikes and spares

  for (var j = 0; j < 10; j++){
    var frameSum = 0;

    if (frames[j].length == 1){
      frameSum = frames[j][0];
    }

    if (frames[j].length == 2){
      frameSum = frames[j][0] + frames[j][1];
    }

    if (frameSum < 10){
      score += frameSum;
    }

    if (frameSum === 10 && frames[j].length == 2){
      score += (frameSum + frames[j+1][0]);
    }

    if (frameSum === 10 && frames[j].length == 1){
      if (frames[j+1].length == 2){
        score += (frameSum + frames[j+1][0] + frames[j+1][1]);
      } else {
        score += (frameSum + frames[j+1][0] + frames[j+2][0]);
      }
    }

  }

  return score;
};