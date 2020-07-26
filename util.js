
export const gen_Random = (limit) => {
    let arr = [];

    while(arr.length < 30){
        let r = Math.floor(Math.random() * limit) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}

