import { render, screen } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

describe('Counter Tests', ()=> {
    test('Counter - Heading - should have the title Count 1', () => {
        render(<Counter initCount={1} />)
        expect(screen.queryByTestId('count-1')).toBe('Count 1');
    });
});