import { screen, render } from '@testing-library/react';
import Home from '../components/home';

test('renders home page successfully', () => {
    const { container } = render(<Home/>)
    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hello, I am Chukwuemeka')
    expect(container).toMatchSnapshot()
})