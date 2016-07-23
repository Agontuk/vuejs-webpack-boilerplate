<template>
    <div id="app">
        <img class="logo" src="./assets/logo.png" />
        <counter></counter>
    </div>
</template>

<script>
import Counter from './components/Counter';

export default {
    components: {
        Counter
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
    text-align: center;
}
</style>
