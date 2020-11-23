describe('Prueba en el archivo demo.test.js', () => {
    test('debe de ser iguales los strings', () => {

        const mensj = "Hola mundo";
      
        const mensj2 = `Hola mundo`;
      
        expect( mensj ).toBe( mensj2 );
      })
})

