
// Audio player functionality and button interactions:

var x = document.getElementById("myAudio");
function playAudio() { 
    x.play(); 
  } 

// Pause button functionality:
  
  function pauseAudio() { 
    x.pause(); 
  } 

// Stop button functionality:

function stopAudio() {
    playAudio()
    x.pause();
    audio.currentTime = 0;
}

// Mute and Unmute button functionality:

const audio = document.getElementById("myAudio");

document.getElementById("mute-btn").addEventListener("click", function(){
    this.textContent = this.textContent === "mute" ? "unmute" : "mute"; 
    myAudio.muted = !myAudio.muted;
})

// login authorization and successful/unsuccessful message function:

function auth () {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username =="JohnP23" && password == "John123") {
        window.location.assign("visual.html");
        alert("Login Succesful!")
    }
    else {
        alert("Invalid Username and Password")
        return;
    }
}

//3d perspective camera and visualyzer functionality:

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cubes = [];
const numCubes = 1000;
const cubeSize = 0.4;
const cubeEdgesMaterial = new THREE.LineBasicMaterial({
color: 0x000000 });
    for(let i = 0; i < numCubes; i++) {
        
const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
const cubeMaterial = new THREE.MeshBasicMaterial ({color: Math.random() * 0xffffff, wireframe: false, opacity: 1 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = (Math.random() - 0.5 ) * 50;
    cube.position.y = (Math.random() - 0.5 ) * 50;
    cube.position.z = (Math.random() - 0.5 ) * 50;
    cube.rotation.x = Math.random() * Math.PI;
    cube.rotation.y = Math.random() * Math.PI;
    cube.rotation.z = Math.random() * Math.PI;

const edges = new THREE.EdgesGeometry(cubeGeometry);
const line = new THREE.LineSegments(edges, cubeEdgesMaterial);

    cube.add(line);
    cubes.push(cube);
    scene.add(cube);

}

// Visualyzer animation section:

function animate() {
    requestAnimationFrame ( animate );
    cubes.forEach(cube => {
        cube.rotation.y += Math.random() * 0.005;
        cube.rotation.z += Math.random() * 0.005;
        cube.rotation.x += Math.random() * 0.005;
    });

    const time = Date.now() * 0.0005;
    camera.position.x = Math.sin( time ) * 2;
    camera.position.y = Math.cos( time ) * 2;

    camera.lookAt( scene.position );
    renderer.render(scene, camera);

}

animate();

