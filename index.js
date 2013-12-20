module.exports = THREE = require('three');
require('three-object');

/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 *
 * parameters = {
 *  color: <hex>,
 *  opacity: <float>,
 *  map: new THREE.Texture( <Image> ),
 *
 *  size: <float>,
 *
 *  blending: THREE.NormalBlending,
 *  depthTest: <bool>,
 *  depthWrite: <bool>,
 *
 *  vertexColors: <bool>,
 *
 *  fog: <bool>
 * }
 */

THREE.ParticleSystemMaterial = function ( parameters ) {

	THREE.Material.call( this );

	this.color = new THREE.Color( 0xffffff );

	this.map = null;

	this.size = 1;
	this.sizeAttenuation = true;

	this.vertexColors = false;

	this.fog = true;

	this.setValues( parameters );

};

THREE.ParticleSystemMaterial.prototype = Object.create( THREE.Material.prototype );

THREE.ParticleSystemMaterial.prototype.clone = function () {

	var material = new THREE.ParticleSystemMaterial();

	THREE.Material.prototype.clone.call( this, material );

	material.color.copy( this.color );

	material.map = this.map;

	material.size = this.size;
	material.sizeAttenuation = this.sizeAttenuation;

	material.vertexColors = this.vertexColors;

	material.fog = this.fog;

	return material;

};

// backwards compatibility

THREE.ParticleBasicMaterial = THREE.ParticleSystemMaterial;
/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ParticleSystem = function ( geometry, material ) {

	THREE.Object3D.call( this );

	this.geometry = geometry !== undefined ? geometry : new THREE.Geometry();
	this.material = material !== undefined ? material : new THREE.ParticleSystemMaterial( { color: Math.random() * 0xffffff } );

	this.sortParticles = false;
	this.frustumCulled = false;

};

THREE.ParticleSystem.prototype = Object.create( THREE.Object3D.prototype );

THREE.ParticleSystem.prototype.clone = function ( object ) {

	if ( object === undefined ) object = new THREE.ParticleSystem( this.geometry, this.material );

	object.sortParticles = this.sortParticles;

	THREE.Object3D.prototype.clone.call( this, object );

	return object;

};
