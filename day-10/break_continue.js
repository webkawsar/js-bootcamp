

// Js Break and Continue
const myInfo = ['Kawsar', 'Ahmed', 26, 'Web Developer', 'Bekar'];
for (let i = 0; i < myInfo.length; i++) {
    const element = myInfo[i];
    if(element === 26){
        
        continue;
    }else {
        console.log(element);
    }  
}


for (let i = 0; i < myInfo.length; i++) {
    const element = myInfo[i];
    if(element === 26){
        
        break;
    }else {
        console.log(element);
    }  
}