let name = 'Zico';

function takemyName() {
  console.log(name);

  if (true) {
    console.log(name);
  }

  for (let i = 0; i <= 2; i++) {
    console.log(name);
  }
}

const chwingum = function () {
  return name + ' take your chwingum from here';
}

chwingum() //?

// defined the variable before calling the function
name = 'Coder Zico';

takemyName();

//? function scope

function playCricket() {
  const gameName = 'Cricket';
  const playerName = ['VK18', 'CP21', 'HitMan97', 'JP45'];
  let coach = 'MSD';

  console.log(gameName);
  console.log(playerName);
  console.log(coach);
}

playCricket();

//! variable defines inside a function, cannot be accessed outside of the function
// console.log(players);
// console.log(coach);
// console.log(gameName);