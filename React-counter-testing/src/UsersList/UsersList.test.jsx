import { render } from '@testing-library/react';
import { usersListMockData } from './UsersListMockData';

import React from 'react';
import UsersList from './UsersList';

describe('UsersList Component Tests', () => {

    const mockData = usersListMockData();

    global.fetch = jest.fn( ()=> {
        return Promise.resolve( {
            json: () => Promise.resolve( ()=> mockData )
        })
    })

    beforeEach( ()=> {
        fetch.mockClear();
    })
    
    test('UsersList - Heading - should have h2 tag',  async () => {
        const { findByRole } = render(<UsersList />);
        const h2Tag = await findByRole("heading", { level: 2});
        expect(h2Tag).toBeTruthy();
    });

    test('UsersList - Call Loaded UL - should resolve callLoaded to show ul',  async () => {
        const { findByRole } = render(<UsersList />);
        const ulElem = await findByRole('ul');
        expect(ulElem).toBeTruthy();
    });

    test('UsersList - Mock Fetch Data - should resolve to show 5 li elements', async() => {
        const { findAllByRole } = render(<UsersList />);
        const liElem = await findAllByRole('li');
        expect(liElem.length).toEqual(5);
    })

});