function compare(prop){
     return function(a,b){
        if (a[prop] > b[prop])
            return  1
        if (a[prop] < b[prop])
            return  -1
        return 0
    }  
}
function sort(arr){
    return arr.sort(compare('num'));
}
module.exports = sort;