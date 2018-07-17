// globals
var scene, camera, renderer, control, orbit;
var box;

// init
init()
draw()
update()

function init(){	
	
	// setup renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	// setup camera
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 3000 );
	camera.position.set( 1000, 1000, 1000 );
	camera.lookAt( 200, 200, 200 );
	
	// setup scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xefd1b5 );	
	//scene.fog = new THREE.FogExp2(0xffffff, 0.2);
	scene.add( new THREE.GridHelper( 1000, 10 ) );
	
	/* var light = new THREE.DirectionalLight( 0xffffff, 2 );
	light.position.set( 1, 1, 1 );
	scene.add( light ); */
	
	/*
	var texture = new THREE.TextureLoader().load( 'textures/crate.gif', render );
	texture.mapping = THREE.UVMapping;
	texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
	*/
	
	control = new THREE.TransformControls( camera, renderer.domElement );
	// call this for static scene requestAnimationFrame, then listen for change
	// control.addEventListener( 'change', update );
	
	orbit = new THREE.OrbitControls( camera, renderer.domElement ); 
	// call this only in static scenes (i.e., if there is no animation loop)
	//orbit.addEventListener( 'change', update );
	orbit.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	orbit.dampingFactor = 0.25;
	orbit.screenSpacePanning = true;
	orbit.minDistance = 100;
	orbit.maxDistance = 2000
	orbit.maxPolarAngle = Math.PI / 2;
	
	window.addEventListener( 'resize', onWindowResize, false );
	window.addEventListener( 'keydown', onKeyDown);
	window.addEventListener( 'keyup', onKeyUp);
}

function draw(){
	
	light = PtLight( 1000, 1000, 1000 );
	scene.add( light );
	
	box = Box(200,200,200)
	//box.position.y = 300;
	scene.add(box)
	
	control.attach( box );
	scene.add( control );
}

function update() {
	requestAnimationFrame( update );
	//rotateBox();
	orbit.update();
	renderer.render( scene, camera );
}

// ------------------
// Helper Functions
// ------------------

function Box(w, h, d){
	var geometry = new THREE.BoxGeometry( w, h, d );
	//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var material = new THREE.MeshPhongMaterial( { color: 'RGB(100,100,100)' } );
	return new THREE.Mesh( geometry, material );
}

function PtLight( x, y, z ){
	intensity = 1;
	var light = new THREE.PointLight(0xffffff, intensity);
	light.position.x = x;
	light.position.y = y;
	light.position.z = z;
	return light;
}

function rotateBox(){
	// animate cube
	box.rotation.x += 0.05;
	box.rotation.y += 0.05;	
	//camera.position.z = 5
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
	render();
}

function onKeyDown( event ) {
	switch ( event.keyCode ) {
		case 81: // Q
			control.setSpace( control.space === "local" ? "world" : "local" );
			break;
		case 17: // Ctrl
			control.setTranslationSnap( 100 );
			control.setRotationSnap( THREE.Math.degToRad( 15 ) );
			break;
		case 87: // W
			control.setMode( "translate" );
			break;
		case 69: // E
			control.setMode( "rotate" );
			break;
		case 82: // R
			control.setMode( "scale" );
			break;
		case 187:
		case 107: // +, =, num+
			control.setSize( control.size + 0.1 );
			break;
		case 189:
		case 109: // -, _, num-
			control.setSize( Math.max( control.size - 0.1, 0.1 ) );
			break;
	}
}

function onKeyUp( event ) {
	switch ( event.keyCode ) {
		case 17: // Ctrl
			control.setTranslationSnap( null );
			control.setRotationSnap( null );
			break;
	}
}
