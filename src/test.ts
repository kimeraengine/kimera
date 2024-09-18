type Constructor<T = {}> = new (...args: any[]) => T;

// GameObject의 구조를 정의하는 인터페이스
interface IGameObject {
  name: string;
}

function Movable<TBase extends Constructor<IGameObject>>(Base: TBase) {
  return class extends Base {
    #speed: number = 0;

    setSpeed(speed: number) {
      this.#speed = speed;
    }

    move() {
      console.log(`${this.name} is moving at speed ${this.#speed}...`);
    }
  };
}

function Shootable<TBase extends Constructor<IGameObject>>(Base: TBase) {
  return class extends Base {
    #ammo: number = 10;

    shoot() {
      if (this.#ammo > 0) {
        this.#ammo--;
        console.log(`${this.name} is shooting! Ammo left: ${this.#ammo}`);
      } else {
        console.log(`${this.name} is out of ammo!`);
      }
    }

    reload(amount: number) {
      this.#ammo += amount;
      console.log(`${this.name} reloaded. Current ammo: ${this.#ammo}`);
    }
  };
}

class GameObject implements IGameObject {
  constructor(public name: string) {}
}

class Test extends GameObject {}

class Player extends Movable(Shootable(GameObject)) {
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
