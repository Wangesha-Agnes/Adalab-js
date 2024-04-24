const cup ={
    color:'red',
    size:'small',
    texture:'smooth',
    shape:'round',
    functionality:{
        drinkType:'tea',
        temperature:'hot',
    },
    drink: function(){
        console.log('Use me to drink');
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`)
    }
};

console.log({color: cup.color});
console.log('color',cup.color)
console.log('size', cup.size);
console.log('temperature',cup.functionality.temperature);
console.log('texture', cup.texture)

// add an object
cup.model = 'glass';
console.log({cup});
console.log(cup);

// delete an object
delete cup.model;
console.log({cup});

// change a value of the object
cup.color = 'green';
console.log({cup});

cup.drink();

// the output is keys
const keys = Object.keys(cup);
console.log({keys});

// the output is values
const values = Object.values(cup);
console.log({values});

const loop = Object.keys(cup).map(item =>{
    return ({key:item, value:cup[item]});
})

console.log({loop});

Object.keys(cup).forEach(item =>{
    console.log({key:item, value:cup[item]});
})