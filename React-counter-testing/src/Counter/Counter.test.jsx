import { render, screen } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

describe('Counter Tests', ()=> {
    test('Counter - Heading - should have the title Count 1', () => {
        const iCount = 1;
        const { getByTestId } = render(<Counter initCount={iCount} />);
        const h2text = getByTestId(`count-${iCount}`).textContent;
        
        expect(h2text).toBe("Count 1")
    });
});