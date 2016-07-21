<template>
    <div>
        <h1>Counter: {{ count }}</h1>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
export default {
    vuex: {
        getters: {
            count: function (state) {
                return state.count;
            }
        },
        actions: {
            increment: ({ dispatch }) => dispatch('INCREMENT'),
            decrement: ({ dispatch }) => dispatch('DECREMENT')
        }
    }
};
</script>
