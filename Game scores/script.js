var goals = [];

document.getElementById("addGoal").addEventListener("click", function () {
  // Uzimamo vrednosti
  var min = document.getElementById("minute").value;
  var team = document.getElementById("team").value;
  var player = document.getElementById("player").value;

  // Smestamo vrednosti u objekat kao propertiji
  var goal = {
    min: min,
    team: team,
    player: player
  };

  // Objekat saljemo u niz goals
  goals.push(goal);

  // Ocistimo unete vrednosti iz input polja i spremimo ih za sledeci unos
  document.getElementById("minute").value = "";
  document.getElementById("team").value = "";
  document.getElementById("player").value = "";

  // Parent ul html element
  var listOfGoalsElement = document.getElementById('listOfGoals');

  // Izbrisemo sve sto je pre toga bilo u listi da bi opet ispocetka ubacili sve elemente
  listOfGoalsElement.innerHTML = ""

  var argentinaGoals = 0;
  var franceGoals = 0;

  goals.forEach(function(item, index){
    var goalElement = document.createElement('li');
    goalElement.textContent = item.min + ' - ' + item.player;

    if(item.team === 'France'){
        goalElement.style = "text-align: center;"
        franceGoals++;
    } else {
        argentinaGoals++;
        goalElement.style = "text-align: center;"
    }

    listOfGoalsElement.appendChild(goalElement);
  });

  // Ispisujemo rezultat
  document.getElementById('argentinaScore').textContent = argentinaGoals;
  document.getElementById('franceScore').textContent = franceGoals;
});