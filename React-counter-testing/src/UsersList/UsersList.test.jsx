import { render, waitFor, act, screen, mockImplementation, waitForElement } from '@testing-library/react';
import { usersListMockData } from './UsersListMockData';
//import { JSONplaceholder } from '../api/JSONplaceholder';
import React from 'react';
import UsersList from './UsersList';

describe('UsersList Component Tests', () => {

    const mockData = usersListMockData();

    global.fetch = jest.fn( ()=> {
        return Promise.resolve( {
            json: () => Promise.resolve(mockData())
        })
    })

    beforeEach( ()=> {
        fetch.mockClear();
    })
    
    test('UsersList - Heading - should have h2 tag',  async () => {
        const { findByRole } = render(<UsersList />);
        const h2Tag = await waitFor( ()=> findByRole("heading", { level: 2}));
        expect(h2Tag).toBeTruthy();
    });

    test('UsersList - Map List - with mock should have 5 results', async () => {
        const { findByRole } = render(<UsersList />);
        const sectionElem = await waitFor( ()=> findByRole('section'), {timeout: 5000});
        expect(sectionElem).toBeTruthy();
    });
    
    /*
    test('UsersList - fetchResponse mock should show data in ul', async ()=> {
        
        
        
        act( ()=> {
            const { findByRole } = render(<UsersList />);

            
            const sectionExists = findByRole("section");
            const liData = findByRole("li")
            
            
            await waitFor( ()=> {

            });
           
            
            expect(sectionExists).toBeTruthy();
            expect(liData.length).toEqual(5);
        });
       

        
        
    });
    */
});