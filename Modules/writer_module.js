let MyTypist = (function() {
    // block division in variable strings
    let strings = document.querySelector(".print_string");
    // String of text
    let stringText = "Development of colour rainbow text";
    // converted array
    let ArrStrings = Array.from(stringText);
    // color array
    let colorArray = ['red', 'orange', 'black', 'green', 'deepskyblue', 'blue', 'purple'];

    // int string
    let i = -1;
    // int color
    let colorInt = -1;



    function getWrite() {
        let outputInterval = function* () {
            if(i < ArrStrings.length - 1) {
                i = i + 1;
                colorInt = colorInt + 1;
                if(colorInt < ArrStrings.length - 1) {
                    // strings.style.color = colorArray[colorInt];
                    if (colorInt === 6) {
                        colorInt = 0;
                    }
                }
                console.log(ArrStrings[i]);
                yield strings.innerHTML += '<span style="font-size: 20pt; color: ' + colorArray[colorInt] + '">' + ArrStrings[i] + '</span>';
            } else {
                clearInterval(interval);
                console.log(outputArr);
            }
        }

        let interval = setInterval(() => {
            outputInterval().next();
        }, 100);
    };
    return {
        getWrite: getWrite
    }
})();

export { MyTypist  };