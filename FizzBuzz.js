function fizzBuzz (num){
    for(let i=1; i<num; i++){
        if(i%15===0){
            console.log('Bob Ross');
        }
        else if(i%3===0){
            console.log('Bob');
        }
        else if(i%5===0){
            console.log('Ross');
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz(5);