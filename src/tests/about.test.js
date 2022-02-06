import { screen, render } from '@testing-library/react';
import About from '../components/about.jsx';
import { logos, contactLinks } from '../data';

test('renders about page with images and links successfully', () => {
    const { container } = render(<About/>)
    const logo = screen.getAllByRole('img')
    const links = screen.getAllByRole('link')

    expect(logo).toHaveLength(logos.length)
    expect(links).toHaveLength(contactLinks.length)
    links.forEach(link => {
        expect(link).toBeEnabled()
    })
    expect(container).toMatchSnapshot()
})