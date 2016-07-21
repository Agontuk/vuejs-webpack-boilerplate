export function increment ({ dispatch }, data) {
    dispatch({
        type: 'INCREMENT',
        data: data
    });
}

export function decrement ({ dispatch }, data) {
    dispatch({
        type: 'DECREMENT',
        data: data
    });
}
