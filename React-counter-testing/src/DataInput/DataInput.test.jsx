import { render , fireEvent , screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import DataInput from './DataInput';

describe('Data Input Tests', ()=> {

    const testName = 'richard';

    beforeEach(  ()=> {
        userEvent.setup();
        render(<DataInput />);    
    })

    test('Data Input - changing input 1 should change other values', async () => {
        const input1 = screen.getByTestId('input one');
        const input2 = screen.getByTestId('input two');
        const heading = screen.getByRole('heading', { level: 2 });

        await act( ()=> userEvent.type(input1, testName) );
        
        waitFor( ()=> {
            expect(heading.textContent).toEqual(`Name is ${testName}`);
            expect(input1.value).toEqual(testName)
            expect(input2.value).toEqual(testName);
        });
    });

    test('Data Input - changing input 2 should change other values', async ()=> {
        const input1 = screen.getByTestId('input one');
        const input2 = screen.getByTestId('input two');
        const heading = screen.getByRole('heading', { level: 2 });

        await act( ()=> userEvent.type(input2, testName) );
        
        waitFor( ()=> {
            expect(heading.textContent).toEqual(`Name is ${testName}`);
            expect(input1.value).toEqual(testName)
            expect(input2.value).toEqual(testName);
        });
    });



})