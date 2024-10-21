    let one = document.getElementById('input1')
    let two = document.getElementById('input2')
    let three = document.getElementById('input3')

    function calc(operator) {
        let one1 = input1.value
        let two2 = input2.value

        if (operator === '+'){
            input3.value = +(one1) + +(two2)
        } else if (operator === '-'){
            input3.value = +(one1) - +(two2)
        }else if (operator === '/'){
            input3.value = +(one1) / +(two2)
        } else if (operator === '-'){
            input3.value = +(one1) - +(two2)
        }else if (operator === '**'){
            input3.value = Number(one1) ** Number(two2)
        }else if (operator === 'sqrt'){
            input3.value = Number (Math.sqrt(one1))
        }
    }
    // function addition() {
    //     let one1 = input1.value
    //     let two2 = input2.value
    //     let three3 = input3.value

    //     if(one1 || two2 === Number){
    //         input3.value = one1 + two2;
    //     }
    // }

    // function multiplication() {
    //     let one1 = input1.value
    //     let two2 = input2.value
    //     let three3 = input3.value

    //     if(one1 || two2 === Number){
    //         input3.value = one1 * two2;
    //     }
    // }

    // function division() {
    //     let one1 = input1.value
    //     let two2 = input2.value
    //     let three3 = input3.value

    //     if(one1 || two2 === Number){
    //         input3.value = one1 / two2;
    //     }
    // }
    
    // function subtract() {
    //     let one1 = input1.value
    //     let two2 = input2.value
    //     let three3 = input3.value

    //     if(one1 || two2 === Number){
    //         input3.value = one1 - two2;
    //     }
    // }