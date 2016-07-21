<template>
    <div id="app">
        <img class="logo" src="./assets/logo.png">
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

<style scoped>
#app {
    text-align: center;
}
</style>
