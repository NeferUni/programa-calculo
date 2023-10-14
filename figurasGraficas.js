var scene, camera, renderer, sphere, cone, ellipse, cylinder;

        function reiniciarEscena() {
            if (sphere) {
                scene.remove(sphere);
                sphere.geometry.dispose();
                sphere.material.dispose();
            }

            if (cone) {
                scene.remove(cone);
                cone.geometry.dispose();
                cone.material.dispose();
            }

            if (ellipse) {
                scene.remove(ellipse);
                ellipse.geometry.dispose();
                ellipse.material.dispose();
            }

            if (cylinder) {
                scene.remove(cylinder);
                cylinder.geometry.dispose();
                cylinder.material.dispose();
            }
        }

        function inicializarEscena() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            camera.position.z = 5;
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(300, 300);
            document.getElementById('scene-container').appendChild(renderer.domElement);
        }

        function actualizarEsfera() {
            reiniciarEscena();

            var radio = parseFloat(document.getElementById("radio").value);
            var segmentos = parseInt(document.getElementById("segmentos").value);

            if (!scene) {
                inicializarEscena();
            }

            var geometry = new THREE.SphereGeometry(radio, segmentos, segmentos);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

            sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            function animate() {
                requestAnimationFrame(animate);
                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;
                renderer.render(scene, camera);
            }

            animate();
        }

        function actualizarCono() {
            reiniciarEscena();

            var radio = parseFloat(document.getElementById("radioCono").value);
            var altura = parseFloat(document.getElementById("alturaCono").value);
            var segmentos = parseInt(document.getElementById("segmentosCono").value);

            if (!scene) {
                inicializarEscena();
            }

            var geometry = new THREE.ConeGeometry(radio, altura, segmentos);
            var material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

            cone = new THREE.Mesh(geometry, material);
            scene.add(cone);

            function animate() {
                requestAnimationFrame(animate);
                cone.rotation.x += 0.01;
                cone.rotation.y += 0.01;
                renderer.render(scene, camera);
            }

            animate();
        }

        function actualizarElipsoide() {
    reiniciarEscena();

    var semiejeX = parseFloat(document.getElementById("semiejeX").value);
    var semiejeY = parseFloat(document.getElementById("semiejeY").value);
    var semiejeZ = parseFloat(document.getElementById("semiejeZ").value);
    var segmentosElipsoide = parseInt(document.getElementById("segmentosElipsoide").value);

    if (!scene) {
        inicializarEscena();
    }

    // Crear elipsoide escalando una esfera
    var geometry = new THREE.SphereGeometry(1, segmentosElipsoide, segmentosElipsoide);
    geometry.scale(semiejeX, semiejeY, semiejeZ);

    var material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

    ellipse = new THREE.Mesh(geometry, material);
    scene.add(ellipse);

    function animate() {
        requestAnimationFrame(animate);
        ellipse.rotation.x += 0.01;
        ellipse.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

        function actualizarCilindro() {
            reiniciarEscena();

            var radioCilindro = parseFloat(document.getElementById("radioCilindro").value);
            var alturaCilindro = parseFloat(document.getElementById("alturaCilindro").value);
            var segmentosCilindro = parseInt(document.getElementById("segmentosCilindro").value);

            if (!scene) {
                inicializarEscena();
            }

            var geometry = new THREE.CylinderGeometry(radioCilindro, radioCilindro, alturaCilindro, segmentosCilindro);
            var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });

            cylinder = new THREE.Mesh(geometry, material);
            scene.add(cylinder);

            function animate() {
                requestAnimationFrame(animate);
                cylinder.rotation.x += 0.01;
                cylinder.rotation.y += 0.01;
                renderer.render(scene, camera);
            }

            animate();
        }

        document.addEventListener('DOMContentLoaded', function () {
            const formTabs = document.querySelectorAll('.form-tab');
            const formContainers = document.querySelectorAll('.form-container');
        
            formTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const formId = tab.getAttribute('data-form');
                    
                    // Oculta todos los formularios
                    formContainers.forEach(container => {
                        container.classList.remove('active');
                    });
        
                    // Muestra solo el formulario seleccionado
                    document.getElementById(formId).classList.add('active');
                });
            });
        });
        