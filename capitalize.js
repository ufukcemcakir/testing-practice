function capitalize(string){
    let array = string.split('');
    array[0] = array[0].toUpperCase();
    return array.join().replace(/,/g, "");
}
module.exports = capitalize;