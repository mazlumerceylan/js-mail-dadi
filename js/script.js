// Array delle email autorizzate ad accedere
const listaEmail = ["email1@example.com", "email2@example.com", "email3@example.com"];

// Funzione per verificare l'email inserita
function verificaEmail() {
	const emailInserita = document.getElementById("email").value;
	if (listaEmail.includes(emailInserita)) {
		document.getElementById("accesso").style.display = "none";
		document.getElementById("gioco").style.display = "block";
	} else {
		alert("L'email inserita non è autorizzata ad accedere al gioco.");
	}
}

// Funzione per generare un numero casuale da 1 a 6
function tiraDado() {
	return Math.floor(Math.random() * 6) + 1;
}

// Funzione per giocare
function gioca() {
	const punteggioGiocatore = tiraDado();
	const punteggioComputer = tiraDado();

	// Mostra il dado del giocatore
	const dadoGiocatore = document.getElementById("dado-giocatore");
	dadoGiocatore.src = `https://i.imgur.com/Ff3q7NB.png?${Math.random()}`;
	dadoGiocatore.alt = `Dado: ${punteggioGiocatore}`;

	// Mostra il dado del computer
	const dadoComputer = document.getElementById("dado-computer");
	dadoComputer.src =
