import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCounter } from '../../src/hooks';



describe('Pruebas useCounter', () => {
    
    test('debe de retornar los valores por defecto', () => {
        
        const { result } = renderHook( () => useCounter() );
        const { counter, dencrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( dencrement ).toEqual( expect.any(Function) );
        expect( increment ).toEqual( expect.any(Function) );
        expect( reset ).toEqual( expect.any(Function) );
    });

    test('debe de generar el counter con el valor de 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;
  
        expect( counter ).toBe(100);
    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook( () => useCounter(10) );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(13);
    });

    test('debe de decrementar el contador', () => {
        const { result } = renderHook( () => useCounter(10) );
        const { counter, dencrement } = result.current;

        act( () => {
            dencrement();
            dencrement(2);
        });

        expect( result.current.counter ).toBe(7);
    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook( () => useCounter(10) );
        const { counter, increment, dencrement, reset } = result.current;

        act( () => {
            increment(10);
            dencrement(3);
            reset();
        });

        expect( result.current.counter ).toBe(10);
    });

});

