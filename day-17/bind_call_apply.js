


// bind / call / apply

function profile() {

    console.log(`This is ${this}`);
}

// profile.call('Kawsar Ahmed');
// profile.apply('Imran Ahmed');
const boundFunc = profile.bind('Shamim Mohammad');
boundFunc();


























