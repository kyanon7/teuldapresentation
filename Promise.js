const trueCondition = true;

const promise = new Promise((resolve, reject) => {
        if (trueCondition){
            resolve('성공');
        } else {
            reject('실패');
        }
});

promise.then((result) => {
    console.log(result);
}, (error) => {
    console.log(console.error);
});