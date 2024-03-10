// assets/js/app.js
import { cargarDatosAnimales, cargarImagenes } from './data.js';
import { Animal, Mamifero, Ave } from './animal.js';

export async function inicializarApp() {
  const animalesData = await cargarDatosAnimales();
  await cargarImagenes(animalesData);

  document.getElementById('btnRegistrar').addEventListener('click', () => {
    const nombreAnimal = document.getElementById('animal').value;
    const edadAnimal = document.getElementById('edad').value;
    const comentariosAnimal = document.getElementById('comentarios').value;

    // Validar que todos los campos estén completos
    if (nombreAnimal && edadAnimal && comentariosAnimal) {
      const animalData = animalesData.find(animal => animal.name === nombreAnimal);

      let animal;
      if (animalData) {
        if (edadAnimal.includes("años")) {
          animal = new Mamifero(animalData.name, animalData.imagen, animalData.sonido, "Pelo corto");
        } else {
          animal = new Animal(animalData.name, animalData.imagen, animalData.sonido);
        }

        mostrarEnTabla(animal, edadAnimal, comentariosAnimal);
      } else {
        console.error('Error: No se encontró información para el animal seleccionado.');
      }
    } else {
      console.error('Error: Todos los campos del formulario deben estar completos.');
    }
  });
}

export function mostrarEnTabla(animal, edad, comentarios) {
  const tablaAnimales = document.getElementById('Animales');
  const divAnimal = document.createElement('div');
  divAnimal.classList.add('mr-3', 'mb-3');
  divAnimal.innerHTML = `
    <img src="${animal.imagenElement.src}" alt="${animal.name}" class="img-thumbnail" style="width: 100px;">
    <p>${animal.name}</p>
    <p>${edad}</p>
    <p>${comentarios}</p>
    <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="mostrarDetalle('${animal.name}', '${animal.imagen}', '${comentarios}')">Ver Detalle</button>
    <button class="btn btn-success" onclick="reproducirSonido('${animal.sonido}')">Reproducir Sonido</button>
  `;
  tablaAnimales.appendChild(divAnimal);
}

export function mostrarDetalle(nombre, imagen, comentarios) {
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = `
    <img src="images/${imagen}" alt="${nombre}" class="img-thumbnail" style="width: 100px;">
    <p>${nombre}</p>
    <p>${comentarios}</p>
  `;
}

export function reproducirSonido(sonido) {
  const audioPlayer = document.getElementById('player');
  audioPlayer.src = `sounds/${sonido}`;
  audioPlayer.play();
}
