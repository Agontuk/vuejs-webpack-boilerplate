import * as type from 'constants';

export function increment (data) {
    return {
        type: type.INCREMENT,
        data: data
    };
}

export function decrement (data) {
    return {
        type: type.DECREMENT,
        data: data
    };
}
