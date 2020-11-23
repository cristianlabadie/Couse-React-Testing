import { getImagen } from "../../base/11-async-await"

describe('Pruebas en 11-async-await.js', () => {

    test('Debe de retornar el url de la imagen ', async() => {


        const url = await getImagen();

        expect(  url.includes('https://') ).toBe( true );

    })

})