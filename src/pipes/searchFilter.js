export const searchFilter = (arr, search) => {
    if (!search.length) return arr;
    // console.log(arr.filter(product => search.includes(product.title)));
    return arr.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
};