

function greet(msg) {

    return (name) => {
        return `${msg} ${name}`;
    }
}


console.log(greet('Hola')('Kawsar'))


