import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';
// Mock the CldImage component to prevent it from trying to access Cloudinary
jest.mock('../components/CldImage', () => {
    return {
        __esModule: true,
        default: () => <div>Mocked Cloudinary Image</div>,
    };
});

describe('Page component', () => {
    it('renders without crashing', () => {
        render(<Page />);
        // Check for a text that's always present in your Page component rendering
        // This is a very generic check, replace 'Some static text' with actual static text from your Page component
        expect(screen.getByText('Some static text')).toBeInTheDocument();
    });

    // Add more tests as needed
});
