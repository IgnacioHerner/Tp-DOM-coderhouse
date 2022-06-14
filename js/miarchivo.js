console.log(document);


const app = document.getElementById("app");

const div = document.createElement("div");
div.id = "cards";
app.appendChild(div);

 const h1 = document.createElement("h1");
 h1.className = "tipografia"
 h1.textContent = "24/7 Escabio";
div.appendChild(h1);

// const img = document.createElement("img");
// img.src = "../assets/img1.jpg";
// img.alt = "bebidas"
// div.appendChild(img);

const data = [
   {
    id: 1,
    title: "Fernet",
    imagen: "https://st2.depositphotos.com/1859205/46660/i/450/depositphotos_466607114-stock-photo-tel-aviv-israel-bottle-fernet.jpg"
   },
   {
    id: 2,
    title: "Cerveza",
    imagen: "https://st.depositphotos.com/2429035/2894/i/950/depositphotos_28945157-stock-photo-bottle-of-corona-extra-beer.jpg"
   }, 
   {
    id: 3,
    title: "Vino",
    imagen: "https://st.depositphotos.com/2041581/1975/i/450/depositphotos_19750459-stock-photo-red-wine-and-a-bottle.jpg"
   }, 
   {
    id: 4,
    title: "Gancia",
    imagen: "https://st2.depositphotos.com/35173124/47758/i/1600/depositphotos_477584556-stock-photo-gancia-bottle-white-background-italian.jpg"
   },
   {
    id: 5,
    title: "Gin",
    imagen: "https://st3.depositphotos.com/10944824/32541/i/1600/depositphotos_325415912-stock-photo-bottle-of-beefeater-london-dry.jpg"
   },
   {
    id: 6,
    title: "Whisky",
    imagen: "https://st2.depositphotos.com/35173124/47785/i/1600/depositphotos_477854318-stock-photo-whisky-johnnie-walker-black-label.jpg"
   },
    

];

for (const bebida of data) {
    app.innerHTML += `
    <div class="col">
        <div class="card">
            <img src="${bebida.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${bebida.title}</h5>
                <p class="card-text">This is a longer card with supporting text below as a
                natural lead-in to additional content. This content is a little bit longer.
                </p>
            </div>
        </div>
    </div>
    `;
}

// EVENTOS BOTON PARA HACER DARK MODE



const boton1 = document.getElementById("boton1");
boton1.addEventListener("click", ()=>{

  Swal.fire({
    title:'Hola',
    text:'Que tema desea?',
    icon:'question',
    confirmButtonText:'Dark Mode',
    cancelButtonText:'Light Mode',
    showCancelButton: true,
  }).then((result)=>{
    if(result.isConfirmed)
    {
      document.body.setAttribute("style", "background-color: #082032");
    }
    else
    {
      document.body.setAttribute("style", "background-color: white");
    }
  })
  
});

// Preguntar si es mayor a 18 años //
const edadDelUsuario = parseInt(prompt("¿Cual es tu edad?"));
if (edadDelUsuario >= 18){
    alert("Eres mayor de edad");

// Solicitar Nombre de usuario //

function solicitarNombre() {
    let nombreIngresado = prompt("Ingresar Nombre y Apellido")
    alert("El nombre ingresado es: " + nombreIngresado)
}

solicitarNombre();

// Agegar productos
class Productos {
    constructor(bebida, precio, stock) {
      this.bebida = bebida.toUpperCase();
      this.precio = parseFloat(precio);
      this.stock = parseInt(stock);
    }
  }
  
  let CantidadArticulos = Number(prompt("Cuantas bebidas deseas agregar?"));
  const arrayBebibas = [];
  
  for (let i = 0; i<CantidadArticulos; i++) {
    arrayBebibas[i] = new Productos(
      prompt("Ingrese el nombre de la bebida: "),
      prompt("Ingrese el precio del producto: "),
      prompt("Ingrese el stock del producto: ")
    )
  }

  console.log(arrayBebibas);

  // Para agregar mas bebibas

  arrayBebibas.push("Campari")

  console.log(arrayBebibas);


  
} else {

    alert("Eres menor de edad");
}

// Forms localStorage

function guardarDatos(){
  localStorage.nombre = document.getElementById("nombre").value;
  localStorage.password = document.getElementById("password").value;
 }
 
 function recuperarDatos(){
  if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
   document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + "<br/> Password: " + localStorage.password;
  }
  else{
   document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
  }
 }
