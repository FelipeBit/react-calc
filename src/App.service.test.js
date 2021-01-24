import CalculateService from './App.service'

describe('Operations test',()=>{

    const [calculate, concatNumbers] = CalculateService()

    it('2 + 3 should be 5',()=>{
        const result = calculate(2,3,'+')

        expect(result).toEqual(5)

    })

    it('3 - 2 should be 1',()=>{
        const result = calculate(3,2,'-')

        expect(result).toEqual(1)

    })

    it('4 / 2 should be 2',()=>{
        const result = calculate(4,2,'/')

        expect(result).toEqual(2)

    })


    it('2 * 5 should be 10',()=>{
        const result = calculate(2,5,'*')

        expect(result).toEqual(10)

    })

    it('should return zero for invalid operations',()=>{
        const result = calculate(2,5,'%')

        expect(result).toEqual(0)

    })
})