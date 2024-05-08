const internship = false;
const ourPromise = new Promise((resolve, reject)=>{
    if(internship){
        resolve('I made it');
    }
    else{
        reject('I will try harder')
    }
})

ourPromise.then((response)=>{
    console.log({response});
    console.log('I will continue working harder')
})

.catch((error)=>{
    console.log({error});
    console.log('I will continue applying for jobs')
})

.finally(()=>{
    console.log('I will be a software engineer')
})

console.log({ourPromise});

async function myAkirachixDream(){
    try{
    console.log('This is my dream')
    await ourPromise;
    }
    catch{
        console.log('Our dream is not yet success')
    }
}

myAkirachixDream();