import { screen, render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Header from '../components/header';

const pages = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'About' },
]

test('header renders successfully with navs', () => {
    const onRedirect = jest.fn()
    const { container } = render(<Header pages={pages} onRedirect={onRedirect}/>)
    const navButtons = screen.getAllByRole('button')

    expect(navButtons).toHaveLength(pages.length)
    navButtons.forEach(button => {
        expect(button).toBeEnabled()
    })
    userEvent.click(screen.getByRole('button', { name: "Work" }))
    expect(onRedirect).toHaveBeenCalled()
    expect(container).toMatchSnapshot()
})
