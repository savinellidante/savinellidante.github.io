class Leñador { //clase del personaje que va a manejar el jugador
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 20;
    this.speed = 5;
    this.img = loadImage("data/leniador.png");
    this.paralizado = false; //permite que el leñador se paralize cuando ganas, no permitiendo moverte
  }

  move() {
    if (this.paralizado) { //verifica si ya fuiste paralizado o no
      return;
    }
    
    if (keyIsDown(65) && this.x - this.speed >= 0) {
      this.x -= this.speed;
    }
    if (keyIsDown(68) && this.x + this.size + this.speed <= width) {
      this.x += this.speed;
    }
    if (keyIsDown(87) && this.y - this.speed >= 0) {
      this.y -= this.speed;
    }
    if (keyIsDown(83) && this.y + this.size + this.speed <= height) {
      this.y += this.speed;
    }
  }
  
  paralizar(){
    this.paralizado = true;
  }

  display() {
    image(this.img, this.x, this.y, 100, 100); //imagen del leñador
  }
}
