const canvas =  document.querySelector ('#drawingCanvas');

console.log(window);

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

const cat= document.createElement('img');
const world = document.createElement('img');

let pincel = cat;

cat.src = 'cat.png';
world.src = 'world.png';

const context = canvas.getContext ('2d');

const movimientodelmouse = (event) => {
    const left = event.clientX;
    const top = event.clientY ;

    context.drawImage(pincel, left, top);
    
}

const handleclick = () => {
    if ( pincel === cat) {
        pincel = world;
    } else {
        pincel = cat;
    }

}

canvas.addEventListener('click', handleclick);
canvas.addEventListener('mousemove', movimientodelmouse); 

