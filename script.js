var foo = ['path/to/file', 'foo/bar/baz', 'foo/zap/zip', 'joe'];

function createTree(list){
    var obj = {};
    for (var i = 0; i < list.length; i++) {
        updateObject(obj, list[i].split('/'));
    }
    return obj;
}

function updateObject(obj, arr){
    var key = arr.shift();
    obj[key] = obj[key] || {};
    if(arr.length){
        updateObject(obj[key], arr);
    }
}

var tree = createTree(foo);
console.log(tree);

