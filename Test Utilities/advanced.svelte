<script>
let flipped = false;
</script>

<button
class="card"
class:flipped={flipped}
on:click={() => flipped = !flipped}
>


