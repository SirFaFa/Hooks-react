import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomhooks } from "../../src/03-examples";
import { useCounter } from "../../src/hooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomhooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render( <MultipleCustomhooks />);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes') );
        
        const nextButton = screen.getByRole('button');
        expect( nextButton.disabled ).toBeTruthy(); 
        //screen.debug();
    });

    test('debe de mostrar un Quote', () => {
        
        useFetch.mockReturnValue({
            data: [{author: 'Alguien', quote: 'Hola'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomhooks />);
        expect( screen.getByText('Hola') ).toBeTruthy();
        expect( screen.getByText('Alguien') ).toBeTruthy();
    
        const nextButton = screen.getByRole('button');
        expect( nextButton.disabled ).not.toBeTruthy();
    });

    test('debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Alguien', quote: 'Hola'}],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomhooks /> );
        const nextButton = screen.getByRole('button');
        fireEvent.click( nextButton );
        
        expect( mockIncrement ).toHaveBeenCalled();
    });
});