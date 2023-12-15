import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

describe('Counter Componenet Tests', ()=> {
    const iCount = 1;
    
    test('Counter - Heading - should have the title Count 1', () => {
        const { getByTestId } = render(<Counter initCount={iCount} />);
        const h2text = getByTestId(`count-${iCount}`).textContent;
        
        expect(h2text).toEqual("Count 1")
    });

    
    test('Counter - Expect Increment to increment by 1', ()=> {
        const {getByTestId, getByRole} = render(<Counter initCount={iCount} />);
        const incrementBtn = getByRole("button", {name: "Increment"});
        const h2textBeforeBtn = getByTestId(`count-${iCount}`).textContent;
        expect(h2textBeforeBtn).toEqual("Count 1")

        fireEvent.click(incrementBtn);

        const h2textAfterBtn = getByTestId(`count-${iCount}`).textContent;
        expect(h2textAfterBtn).toEqual("Count 2")
    });
 
    test('Counter - Expect Decrement to decrement by 1', ()=> {
        const {getByTestId, getByRole} = render(<Counter initCount={iCount} />);
        const decrementBtn = getByRole("button", {name: "Decrement"});
        const h2textBeforeBtn = getByTestId(`count-${iCount}`).textContent;
        expect(h2textBeforeBtn).toEqual("Count 1")

        fireEvent.click(decrementBtn);

        const h2textAfterBtn = getByTestId(`count-${iCount}`).textContent;
        expect(h2textAfterBtn).toEqual("Count 0")
    });

    test('Counter - test after increment, reset returns to base initCount', ()=> {
        const {getByTestId, getByRole} = render(<Counter initCount={iCount} />);
        const resetBtn = getByRole("button", {name: "Reset"});
        const incrementBtn = getByRole("button", {name: "Increment"});
        //base
        const h2textBeforeI = getByTestId(`count-${iCount}`).textContent;
        expect(h2textBeforeI).toEqual("Count 1")

        //increment by 1
        fireEvent.click(incrementBtn);

        const h2textAfterI = getByTestId(`count-${iCount}`).textContent;
        expect(h2textAfterI).toEqual("Count 2");

        //after reset click
        fireEvent.click(resetBtn);

        const h2textAfterReset = getByTestId(`count-${iCount}`).textContent;
        expect(h2textAfterReset).toEqual(`Count ${iCount}`)
    });

    test('Counter - test after decrement, reset returns to base initCount', ()=> {
        const {getByTestId, getByRole} = render(<Counter initCount={iCount} />);
        const resetBtn = getByRole("button", {name: "Reset"});
        const decrementBtn = getByRole("button", {name: "Decrement"});
        //base
        const h2textBeforeD = getByTestId(`count-${iCount}`).textContent;
        expect(h2textBeforeD).toEqual("Count 1")

        //decrement by 1
        fireEvent.click(decrementBtn);

        const h2textAfterD = getByTestId(`count-${iCount}`).textContent;
        expect(h2textAfterD).toEqual("Count 0");

        //after reset click
        fireEvent.click(resetBtn);

        const h2textAfterReset = getByTestId(`count-${iCount}`).textContent;
        expect(h2textAfterReset).toEqual(`Count ${iCount}`)
    });
    
    test('Counter - test no initCount value provided defaults to 0', ()=> {
        const {getByTestId} = render(<Counter />);
        const h2Text = getByTestId(`count-0`).textContent;

        expect(h2Text).toEqual("Count 0");
    });
});