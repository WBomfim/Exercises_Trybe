// Movimentos de peças de xadrez

let peca = "CAValo";

function movimentoXadrez (peca){
  let nomeDaPeca = peca.toLowerCase();
  switch (nomeDaPeca) {
    case "rei":
      return "Move-se em qualquer direção, uma casa por vez.";
      break;
    
    case "rainha":
      return "Move-se em qualquer direção, quantas casas quiser.";
      break;

    case "torre":
      return "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.";
      break;

    case "bispo":
      return "Move-se na diagonal, quantas casas quiser.";
      break;

    case "cavalo":
      return "Move-se em \"L\", pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal.";
      break;

    case "peão":
      return "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casa.";
      break;
  
    default:
      return "Peça inválida!";
      break;
  }
}

console.log(movimentoXadrez (peca));
