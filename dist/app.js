(()=>{var d="images";async function c(){try{let o=await(await fetch("animales.json")).json();return o.animales.forEach(a=>{a.imagen=`${d}/${a.imagen}`}),o.animales}catch(e){return console.error("Error al cargar datos del archivo JSON:",e),[]}}async function l(e){let o=e.map(async a=>{let t=new Image;t.src=a.imagen,await new Promise(n=>t.onload=n),a.imagenElement=t});await Promise.all(o)}var s=class{constructor(o,a,t){this.name=o,this.imagen=a,this.sonido=t}reproducirSonido(){let o=document.getElementById("player");o.src=`sounds/${this.sonido}`,o.play()}},r=class extends s{constructor(o,a,t,n){super(o,a,t),this.tipoPelo=n}};async function f(){let e=await c();await l(e),document.getElementById("btnRegistrar").addEventListener("click",()=>{let o=document.getElementById("animal").value,a=document.getElementById("edad").value,t=document.getElementById("comentarios").value;if(o&&a&&t){let n=e.find(m=>m.name===o),i;n?(a.includes("a\xF1os")?i=new r(n.name,n.imagen,n.sonido,"Pelo corto"):i=new s(n.name,n.imagen,n.sonido),p(i,a,t)):console.error("Error: No se encontr\xF3 informaci\xF3n para el animal seleccionado.")}else console.error("Error: Todos los campos del formulario deben estar completos.")})}function p(e,o,a){let t=document.getElementById("Animales"),n=document.createElement("div");n.classList.add("mr-3","mb-3"),n.innerHTML=`
    <img src="${e.imagenElement.src}" alt="${e.name}" class="img-thumbnail" style="width: 100px;">
    <p>${e.name}</p>
    <p>${o}</p>
    <p>${a}</p>
    <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="mostrarDetalle('${e.name}', '${e.imagen}', '${a}')">Ver Detalle</button>
    <button class="btn btn-success" onclick="reproducirSonido('${e.sonido}')">Reproducir Sonido</button>
  `,t.appendChild(n)}function E(e,o,a){let t=document.querySelector(".modal-body");t.innerHTML=`
    <img src="images/${o}" alt="${e}" class="img-thumbnail" style="width: 100px;">
    <p>${e}</p>
    <p>${a}</p>
  `}function h(e){let o=document.getElementById("player");o.src=`sounds/${e}`,o.play()}})();
