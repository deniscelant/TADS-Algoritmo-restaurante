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
    <fieldset>
    
      <legend></legend>
        <h1>${plates[plateIndex].nome}</h1>
        <img src=${plates[plateIndex].img}></img>
        
        <div id="priceWrapper">
          <span class="currency">R$</span>
          <h1 id="platePrice" style="font-size:32px;">${plates[plateIndex].price}</h1>
          <span class="zero">,00</span>
      </div>

    </fieldset>

      `;
    const payment = document.querySelector("#payment");
    function descountPrice(price) {
      const descount = 15;
      const NuNPrice = Number(price.textContent);
      const divide = descount / 100;
      const som = divide * NuNPrice;
      price.textContent = NuNPrice - som;
    }
    const originalValue = document.querySelector("#platePrice").textContent;

    payment.onchange = () => {
      // console.log(payment.selectedIndex)
      const platePrice = document.querySelector("#platePrice");
      if (payment.selectedIndex == 1) {
        descountPrice(platePrice);
      } else if (payment.selectedIndex == 0) {
        platePrice.textContent = originalValue;
      }
    };
  }
}
