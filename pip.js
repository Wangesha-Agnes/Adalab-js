function addition(array){
    let sum = 0
    for(let i=0;i<array.length;i++){
        sum +=array[i]
    }
    console.log(sum)
}
let numbers=[1,2,3,4,5,6]
addition(numbers)


function checkSum(arr){
    let sum = 0
    for(let num of arr){
        sum +=1
    }
}
return sum

function checkVowelsAndConsonant(word){
    let vowels = ['a','e','i','o','u'];
    let words = word.toLowerCase().split('')
    for (let i=0; i<words.length; i++){
    if(vowels.includes(words[i])){
    console.log (`${words[i]} is a vowel`)
    }

    else{
        console.log(`${words[i]} is a consonant`)
    }
}
}
checkVowelsAndConsonant('Agnes')
