<script lang="ts">
  import {Router, Route, Link} from 'svelte-routing';
  import Basics from './components/Introduction/Basics.svelte';

  export let url = '';
</script>

<main>
  <h1>Svelte tutorial and sandbox</h1>
  <Router url={url}>
    <nav>
      <Link to="introduction/basics">Basics</Link>
    </nav>
    <Route path="introduction/basics" component="{Basics}"/>
  </Router>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
