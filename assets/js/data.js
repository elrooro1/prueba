// En data.js
const rutaBaseImagenes = 'images'; // La ruta base de las imágenes

export async function cargarDatosAnimales() {
  try {
    const response = await fetch('animales.json');
    const data = await response.json();

    // Construir rutas completas de imágenes
    data.animales.forEach(animal => {
      animal.imagen = `${rutaBaseImagenes}/${animal.imagen}`;
    });

    return data.animales;
  } catch (error) {
    console.error('Error al cargar datos del archivo JSON:', error);
    return [];
  }
}

export async function cargarImagenes(animalesData) {
  const promises = animalesData.map(async (animal) => {
    const img = new Image();
    img.src = animal.imagen;
    await new Promise((resolve) => (img.onload = resolve));
    animal.imagenElement = img; // Añadir la propiedad imagenElement al objeto animal
  });

  await Promise.all(promises);
}
