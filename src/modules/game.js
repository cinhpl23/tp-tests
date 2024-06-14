export function getScore(dice) {
    let score = 0;
    const diceValues = {
      'green': 1,
      'gray': 2,
      'orange': 1,
      'yellow': -1,
      'pink': 3,
      'blue': 3
    };
  
    for (let die of dice) {
      score += diceValues[die];
    }
  
    return score;
  }

  // To do 
  
  // Write other function to test