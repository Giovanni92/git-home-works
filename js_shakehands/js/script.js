function getPeople(handshake){
    let persons = 0;
    let sum = 0;
        
    while (sum < handshake ) {
        persons ++; 
        sum += persons;
    }                  
         
    return persons;
       
}

console.log( getPeople(1) );
console.log( getPeople(3) );
console.log( getPeople(6) );
console.log( getPeople(10) );
console.log( getPeople(15) );
console.log( getPeople(120) );