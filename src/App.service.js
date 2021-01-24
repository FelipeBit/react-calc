export default function CalculateService () {

    function calculate(number1, number2, operation){

        let result

        switch (operation) {
            case '+':
                result = number1 + number2
                break;

            case '-':
                result = number1 - number2
                break;

            case '/':
                result = number1 / number2
                break;

            case '*':
                result = number1 * number2
                break;

            default:
                result = 0
                break;
        }

        return result

    }

    function concatNumbers(currentNumber, concatNumber) {

        if (currentNumber === '0' || currentNumber === null) {
            currentNumber = ''
        }

        if (concatNumber === '.' && currentNumber === '') {
            return '0.'
        }

        if (concatNumber === '.' && currentNumber.indexOf('.') > -1) {
            return currentNumber
        }

        return currentNumber + concatNumber

    }


    return [
        calculate,
        concatNumbers,
    ]

}