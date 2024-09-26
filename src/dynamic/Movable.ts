import GameObject from "../core/GameObject.js";

export default function Movable<BT extends Constructor<GameObject>>(Base: BT) {
  return class extends Base {
    speedX = 0;
    speedY = 0;

    minSpeedX = -Infinity;
    maxSpeedX = Infinity;

    minSpeedY = -Infinity;
    maxSpeedY = Infinity;

    accelX = 0;
    accelY = 0;

    update(deltaTime: number): void {
      this.speedX += this.accelX * deltaTime;
      this.speedY += this.accelY * deltaTime;

      if (this.speedX < this.minSpeedX) this.speedX = this.minSpeedX;
      if (this.speedX > this.maxSpeedX) this.speedX = this.maxSpeedX;
      if (this.speedY < this.minSpeedY) this.speedY = this.minSpeedY;
      if (this.speedY > this.maxSpeedY) this.speedY = this.maxSpeedY;

      this.x += this.speedX * deltaTime;
      this.y += this.speedY * deltaTime;

      super.update(deltaTime);
    }
  };
}
