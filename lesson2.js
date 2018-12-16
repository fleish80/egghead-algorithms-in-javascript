function counter(){
    for(let n=0; n<=10; n++){
        console.log(n)
    }
}

counter()

function findSix(i){
    let hasSix="no!"
    i.forEach(a => {
        if(a === 6){
            hasSix = "yes"
        }
        if(Array.isArray(a)) {
            hasSix = findSix(a)
        }
    })
    return hasSix
}