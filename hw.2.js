const names = ['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger' ];

function evenindex(names){
    for (let i=0 ; i<names.length; i+=2) {

    names.splice(i,1, 'evenindex')

    } 
    return names 
}
console.log(evenindex(names))

//names.splice(0,1, "even index");

//console.log(names)


