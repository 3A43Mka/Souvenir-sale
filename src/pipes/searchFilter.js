export const searchFilter = (arr, search) => {
    if (!search.length) return arr;
    return arr.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
};