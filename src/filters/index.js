export function remarks (value) {
    if (value < 30) {
        return `${ value } (not good)`;
    } else if (value >= 30 && value < 80) {
        return `${ value } (good)`;
    }

    return `${ value } (excellent)`;
}
