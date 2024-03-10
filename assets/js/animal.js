// assets/js/animal.js
export class Animal {
    constructor(name, imagen, sonido) {
      this.name = name;
      this.imagen = imagen;
      this.sonido = sonido;
    }
  
    reproducirSonido() {
      const audioPlayer = document.getElementById('player');
      audioPlayer.src = `sounds/${this.sonido}`;
      audioPlayer.play();
    }
  }
  
  export class Mamifero extends Animal {
    constructor(name, imagen, sonido, tipoPelo) {
      super(name, imagen, sonido);
      this.tipoPelo = tipoPelo;
    }
  }
  
  export class Ave extends Animal {
    constructor(name, imagen, sonido, tipoPlumas) {
      super(name, imagen, sonido);
      this.tipoPlumas = tipoPlumas;
    }
  }
  