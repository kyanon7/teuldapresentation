step1(function (error, value1) {
    if (error) {
        console.log(error);
        return;
    }
    step2(function (error, value2) {
        if (error) {
            console.log(error);
            return;
        }
        step3(function (error, value3) {
            if (error) {
                console.log(error);
                return;
            }
            step4((error, value4) => {
                    // 지옥의 콜백...
                });
        });
    });
});
