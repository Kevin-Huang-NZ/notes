var moment = require('moment');

function determineDate() {
    // import ('moment')
    // moment.then(moment => moment().format('LLLL'))
    // .then(str => console.log(str))
    // .catch(err => console.log('Failed to load moment', err));
    console.log(moment().format('LLLL'));
}

determineDate();