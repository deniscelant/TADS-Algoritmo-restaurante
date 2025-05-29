const plates = [
  {
    id: 1,
    nome: "Salada",
    img: ".salada.jpg",
    price: 20,
  },
  {
    id: 2,
    nome: "Macarrão",
    img: ".macarrao.jpg",
    price: 25,
  },
  {
    id: 3,
    nome: "Feijoada",
    img: ".\feijoada.jpg",
    price: 40,
  },
  {
    id: 4,
    nome: "Frango grelhado",
    img: ".\frango.jpg",
    price: 16,
  },
];

let plateIndex;
const descount = false;

const params = new URLSearchParams(window.location.search);

const nome = params.get("nome");
const veg = params.get("veg");
const diet = params.get("diet");

document.querySelector("#welcome").textContent =
  "Olá " + nome + "! veja os detalhes do seu pedido:";

function choosePlate() {
  if (veg == "Sim" && diet == "Sim") {
    return (plateIndex = 1);
  }
  if (veg == "Sim" && diet == "Não") {
    return (plateIndex = 2);
  }
  if (veg == "Não" && diet == "Sim") {
    return (plateIndex = 4);
  }
  if (veg == "Não" && diet == "Não") {
    return (plateIndex = 3);
  }
}

function checkout() {
  document.querySelector("#plate").innerHTML = `
    <h3>${plates[plateIndex].nome}</h3>
    <img>${plates[plateIndex].img}</img>
    <h2 id="platePrice">${plates[plateIndex].price}</h2>
    `;
}

function handleDescount() {
  const payment = document.querySelector("#payment");
  if (payment.selectedIndex === "Dinheiro") {
    descount = true;
  } else {
    descount = false;
  }
  const descountPrice = platePrice - 15;
  const platePrice = document.querySelector("#platePrice").textContent;
}
