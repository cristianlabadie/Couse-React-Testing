import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en desustruración', () => {


    test('Debe retornar un string  y un integer', () => {

        const [letras, numeros] = retornaArreglo() //['ABC', 123];

        // expect( arr ).toEqual( ['ABC', 123] );



        expect(letras).toBe('ABC', )

    })

})