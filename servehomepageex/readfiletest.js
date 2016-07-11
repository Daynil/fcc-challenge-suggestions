var fs = require('fs');

var aboutpg = fs.readFileSync('./aboutpage.html', 'utf-8');
console.log(aboutpg);