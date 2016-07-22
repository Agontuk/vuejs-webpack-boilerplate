import * as type from 'constants';
import { increment, decrement } from './lib/counter';

const mutations = {
    [type.INCREMENT]: (state, action) => {
        increment(state, action);
    },
    [type.DECREMENT]: (state, action) => {
        decrement(state, action);
    }
};

export default mutations;
