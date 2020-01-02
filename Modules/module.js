let Module = (function () {
    // Private variable, function, class, proxy
    let getFunction = function() {
        console.log('Required - Function');
    };

    // Public variable, function, class, proxy
    return {
        req: (function() {
            console.log('Required - Module');
        })(),
        getFunction: getFunction,
    }

})();

export { Module }