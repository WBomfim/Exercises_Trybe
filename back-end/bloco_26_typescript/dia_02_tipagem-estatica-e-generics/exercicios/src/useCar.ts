import Car from "./Car";
import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

const BMW335i = new Car("Volkswagen", Colors.BRANCO, 4);

BMW335i.openTheDoor(Doors.MOTORISTA);
BMW335i.closeTheDoor(Doors.MOTORISTA);
BMW335i.turnOn();
BMW335i.speedUp();
BMW335i.speedDown();
BMW335i.turn(Directions.ESQUERDA);
BMW335i.speedUp();
BMW335i.speedDown();
BMW335i.turn(Directions.DIREITA);
BMW335i.speedUp();
BMW335i.speedDown();
BMW335i.turn(Directions.DIREITA);
BMW335i.speedDown();
BMW335i.stop();
