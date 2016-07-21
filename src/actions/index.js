export function increment (data) {
    return {
        type: 'INCREMENT',
        data: data
    };
}

export function decrement (data) {
    return {
        type: 'DECREMENT',
        data: data
    };
}
