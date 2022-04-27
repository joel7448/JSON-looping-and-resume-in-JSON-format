
// TASK 1 : For the given JSON iterate over all for loops (for, for in, for of, forEach)
// JSON ITERATION 
let Car = {                            // JSON OBJECTS
    "name" : "Mayback S650",
    "Brand": "Mercedes Benz",
    "Mileage" : "7.08Kmpl",
    "Transmission":"Automatic",
     "Type":"Sedan",
     "Engine":"v12",    
};


for(i in Car) // JSON ITERATION USING FOR IN LOOP...
{
    console.log( `${i} : ${Car[i]}`);  //using template literal inside console.log
}
 
var arrays = [
    {
        'name' : 'Joel', // ARRAY OF JSON OBJECTS
        'marks': '89',
    },
    {
        'name':'susithra',
        'marks' : '100',    
    },
    {
        'name' : 'Aridoarichirishika',
        'marks': '99',
    }
];

for(i=0;i<arrays.length;i++){             //Iteration using for loop....

    console.log(`${arrays[i].name} has secured ${arrays[i].marks}`);
}

for(i of arrays) // Itheration using for of loop...
{
    console.log(`${i.name} : ${i.marks}`);
    
}

arrays.forEach(element=>console.log(`${element.name} : ${+element.marks+ +10}`)); // 10 marks extra for each using for each loop,