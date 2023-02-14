


const a = 100;
function sum() {

    console.log(a);
    const b = 200;

    function inner() {

        console.log(b)
        console.log(a)

        function nested() {

            console.log(a);
            const a = 300;
        }
        nested();
    }
    inner();
}

sum();



