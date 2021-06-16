<script lang="ts">
    import { onMount } from "svelte";
    import * as three from "three";
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
    import gsap from 'gsap';

    let canvas;

    const scene = new three.Scene();

    const sizes = {
        width: 800,
        height: 600,
    };

    const cursor = {
        x: 0,
        y: 0
    }

    const cube = new three.Mesh(
        new three.BoxGeometry(1, 1, 1),
        new three.MeshBasicMaterial({ color: 0xff0000 })
    );
    cube.position.x = 0;

    const camera = new three.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
    camera.position.z = 3;
    camera.lookAt(cube.position);

    const axesHelper = new three.AxesHelper(2);

    const clock = new three.Clock()

    scene.add(cube);
    scene.add(camera);
    scene.add(axesHelper);

    // function parseCursor(event): void {
    //     cursor.x = event.clientX / sizes.width - 0.5;
    //     cursor.y = -(event.clientY / sizes.height - 0.5);
    // }

    onMount(() => {
        let frame;

        const renderer = new three.WebGLRenderer({
            canvas,
        });

        renderer.setSize(sizes.width, sizes.height);
        
        // Controls
        // const controls = new OrbitControls(camera, canvas);
        // controls.enableDamping = true;


        const loop = () => {
            const elapsedTime = clock.getElapsedTime() * 2;
            // controls.update();
            
            // cube.rotation.y = elapsedTime;
            // cube.position.x = Math.cos(elapsedTime);
            // cube.position.y = Math.sin(elapsedTime);

            // camera.position.x = cursor.x * 5;
            // camera.position.y = cursor.y * 5;
            // camera.lookAt(cube.position);
            
            renderer.render(scene, camera);
            frame = requestAnimationFrame(loop);
        }

        loop();

        return () => cancelAnimationFrame(frame);
    });
</script>

<div class="flex justify-center items-center">
  <canvas bind:this={canvas}/>
</div>
