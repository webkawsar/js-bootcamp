
function myProfile(firstName, lastName, email, age, job) {
    return `This is ${firstName} ${lastName}. My age is ${age}. I am a ${job}. If you reach to me text at ${email}`;
}

const output = myProfile('Kawsar', 'Ahmed', 'kawsarahmed.dev@gmail.com', 25, 'Full Stack Developer');
console.log(output);