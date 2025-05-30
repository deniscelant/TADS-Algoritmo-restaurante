const plates = [
  {
    id: 1,
    nome: "Salada",
    img: "img/salada.jpg",
    price: 20,
  },
  {
    id: 2,
    nome: "Macarrão",
    img: "img/macarrao.jpeg",
    price: 25,
  },
  {
    id: 3,
    nome: "Feijoada",
    img: "img/feijoada.jpg",
    price: 40,
  },
  {
    id: 4,
    nome: "Frango grelhado",
    img: "img/frango.jpg",
    price: 16,
  },
];

let plateIndex;
const descount = false;

if (document.title === "Checkout Restaurante") {
  const params = new URLSearchParams(window.location.search);

  const nome = params.get("nome");
  const veg = params.get("veg");
  const diet = params.get("diet");

  init();

  function init() {
    document.querySelector("#welcome").textContent =
      "Olá " + nome + "! veja os detalhes do seu pedido:";

    choosePlate();
    checkout();
  }

  function choosePlate() {
    if (veg === "Sim" && diet === "Sim") {
      return (plateIndex = 0);
    } else if (veg === "Sim" && diet === "Não") {
      return (plateIndex = 1);
    } else if (veg === "Não" && diet === "Sim") {
      return (plateIndex = 3);
    } else if (veg === "Não" && diet === "Não") {
      return (plateIndex = 2);
    }
  }

  function checkout() {
    document.querySelector("#plate").innerHTML = `
      <h3>${plates[plateIndex].nome}</h3>
      <img src=${plates[plateIndex].img}></img>
      <h2 id="platePrice">R$${plates[plateIndex].price},00</h2>
      `;
    const payment = document.querySelector("#payment");
    function descountPrice(){
      const platePrice = document.querySelector("#platePrice");
      // const numberPlatePrice = Number(platePrice.innerText)
      // const newPlatePrice = numberPlatePrice - 15;
      // platePrice.innerText = newPlatePrice;
      const number = Number(platePrice.textContent)
      platePrice.textContent = number + 1
    }

    payment.onchange = () => {
      // console.log(payment.selectedIndex)
      if (payment.selectedIndex == 1) {
        descountPrice()
      } else {
        return
      }
    };
  }

 
}
