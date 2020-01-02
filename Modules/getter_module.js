let getterFunction = (function () {
    // private variable, function, class, proxy

    function getConsole() {
        console.log('Hello console!');
    }

    return {
        getConsole: getConsole
    }
})();

export { getterFunction };