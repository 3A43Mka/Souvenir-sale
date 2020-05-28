export const shortenString = (description, len) => {
    return (description.length >len) ? `${description.substring(0, len)}...` : description;
};