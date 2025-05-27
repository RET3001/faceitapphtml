const tg = window.Telegram.WebApp;
tg.expand();

async function loadLobbies() {
  const response = await fetch("https://yourserver.com/api/lobbies"); // если планируешь сделать API
  const lobbies = await response.json();

  const lobbyList = document.getElementById("lobbyList");
  lobbyList.innerHTML = "";

  lobbies.forEach(lobby => {
    const li = document.createElement("li");
    const count = lobby.users.length;
    li.innerHTML = `Лобби #${lobby.id} — ${count}/5 игроков
      <button onclick="joinLobby(${lobby.id})" ${count >= 5 ? "disabled" : ""}>+</button>`;
    lobbyList.appendChild(li);
  });
}

function createLobby() {
  tg.sendData("create_lobby");
  tg.close();
}

function joinLobby(id) {
  tg.sendData(`join_lobby:${id}`);
  tg.close();
}

loadLobbies();
