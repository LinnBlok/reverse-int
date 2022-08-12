module.exports = function reverse (n) {
    let x = n.toString();
    let strRevers = x.split('').reverse().join('');


    if ( n > 0) {
        return strRevers;
    }else if (n >= 0) {
    } else {
        return strRevers.slice(0, -1);
    }
