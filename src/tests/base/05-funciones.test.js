import { getUser, getUsuarioActivo } from '../../base/05-funciones'
import '@testing-library/jest-dom'

describe('Pruebas en 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // console.log(user)

        expect ( user ).toEqual(userTest)
    })

    test('getUsuarioActivo debe de retornar un objecto', () => {

        const user = getUsuarioActivo('Cristian');

        const userTest = {
            uid: "ABC567",
            username: user.username
        }


        expect( user ).toEqual(userTest)

    })

})