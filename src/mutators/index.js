export function increment (state, action) {
    state.count += action.data;
}

export function decrement (state, action) {
    state.count -= action.data;
}
