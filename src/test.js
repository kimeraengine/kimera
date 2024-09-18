import { GameObject, Movable, Shootable } from "./test.ts";

class Player extends Movable(Shootable(GameObject)) {
  constructor(name) {
    super(name);
  }

  action() {
    console.log(`${this.name} is acting:`);
    this.move();
    this.shoot();
  }
}

// 사용 예
const player = new Player("John");
player.setSpeed(5);
player.action();
player.shoot();
player.reload(5);
player.shoot();
