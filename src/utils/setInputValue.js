import { isNull, isArray } from 'lodash';

const setInputValue = value => {
    if (typeof value === 'undefined' || isNull(value)) return '0';
    if (isArray(value)) {
        return value[0].toString();
    }
    return value.toString();
};

export default setInputValue;