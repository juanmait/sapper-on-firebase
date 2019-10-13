<script>
  export let segment;
  import Nav from '../components/Nav.svelte';
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment}></Nav>

<main>
  <slot></slot>
</main>
