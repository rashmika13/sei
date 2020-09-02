function getWinner(player1, player2) {
  let p1 = Math.ceil(Math.random() * 100);
  let p2 = Math.ceil(Math.random() * 100);

  while (p1 === p2) {
    p1 = Math.ceil(Math.random() * 100);
    p2 = Math.ceil(Math.random() * 100);
  }

  return p1 > p2 ? player1 : player2;
}

module.exports = { getWinner };
