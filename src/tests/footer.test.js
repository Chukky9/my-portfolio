import { screen, render } from '@testing-library/react';
import Footer from '../components/footer';

test('footer renders successfully with correct year', () => {
    const { container } = render(<Footer/>)
    expect(screen.getByText(/alozie chukwuemeka/i)).toBeInTheDocument()

    const year = new Date().getFullYear()
    expect(screen.getByText(year, { exact: false })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
})