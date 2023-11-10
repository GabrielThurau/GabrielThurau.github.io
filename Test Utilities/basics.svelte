<script>
    let count = 0;
    function increment() {
        count += 1;
    }
</script>

<button on:click={increment}>
    Clicked {count}
    {count === 1 ? "time" : "times"}
</button>
{#if count > 10}
    <p>{count} is greater than 10</p>
{/if}





<script>
	import { onMount } from 'svelte';
	import { paint } from './gradient.js';
	onMount(() => {
		const canvas = document.querySelector('canvas');
		const context = canvas.getContext('2d');
		let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});
		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>