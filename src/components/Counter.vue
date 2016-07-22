<template>
    <div>
        <h1>Counter: {{ count | remarks }}</h1>
        <button @click="increment(2)">Increment</button>
        <button @click="decrement(1)">Decrement</button>
    </div>
</template>

<script>
import { increment, decrement } from 'actions';
export default {
    vuex: {
        getters: {
            count: (state) => {
                return state.count;
            }
        },
        actions: {
            increment: ({ dispatch }, data) => {
                dispatch(increment(data));
            },
            decrement: ({ dispatch }, data) => {
                dispatch(decrement(data));
            }
        }
    }
};
</script>
