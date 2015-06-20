autowatch = 1;

// Test.

function write(dict, name) {
    if (name)
        post(name, '\n');
    for (var i in dict)
        post(i, '->', dict[i]);
}

post('Now I am one!\n');

var two = require('two.js'),
    three = require('sub/three.js'),
    threeResult = three(),
    doesnt_exist = require('doesnt_exist.js');

write(two, 'two');
write(three, 'three');
post(typeof(two), typeof(three), typeof(threeResult), typeof(doesnt_exist), '\n');

write(threeResult, 'threeResult');
post('finished\n');
