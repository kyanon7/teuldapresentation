doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (secondResult) {
          doFourthThing(
            secondResult,
            function (thirdResult) {
              console.log("final result: " + finalResult);
            },
            failureCallback
          );
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);
