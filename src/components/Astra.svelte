<script lang="ts">
    import { onMount } from "svelte";

    import * as three from "three";
    import { WebGL1Renderer } from "three";

    let canvas;

    const scene = new three.Scene();
    const sizes = {
        width: 800,
        height: 600,
    };
    const group = new three.Group();
    //   scene.add(group);

    const cube1 = new three.Mesh(
        new three.BoxGeometry(1, 1, 1),
        new three.MeshBasicMaterial({ color: 0xff0000 })
    );
    cube1.position.x = 0;
    //   group.add(cube1);

    //   const cube2 = new three.Mesh(
    //     new three.BoxGeometry(1, 1, 1),
    //     new three.MeshBasicMaterial({ color: 0xff0000 })
    //   );
    //   cube2.position.x = 0;
    //   group.add(cube2);

    //   const cube3 = new three.Mesh(
    //     new three.BoxGeometry(1, 1, 1),
    //     new three.MeshBasicMaterial({ color: 0xff0000 })
    //   );
    //   cube3.position.x = 1.5;
    //   group.add(cube3);

    const camera = new three.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.set(1, 2, 3);
    camera.lookAt(group.position);

    const axesHelper = new three.AxesHelper(2);

    scene.add(cube1);
    scene.add(camera);
    scene.add(axesHelper);

    const tick = (renderer: three.WebGLRenderer): any => {
            cube1.rotation.y = 0.01;
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick(renderer));
    }

    onMount(() => {
        const renderer = new three.WebGLRenderer({
            canvas,
        });
        renderer.setSize(sizes.width, sizes.height);

        tick(renderer);
    });
</script>

<div class="flex justify-center items-center">
  <canvas bind:this={canvas} />
</div>
