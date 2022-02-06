import { screen, render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from '../App';
import { projects, logos } from '../data';

test('App renders and components changes successfully', async () => {
    render(<App/>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: "Work" }))
    expect(await screen.findAllByRole('img')).toHaveLength(projects.length)

    userEvent.click(screen.getByRole('button', { name: "About" }))
    expect(await screen.findAllByRole('img')).toHaveLength(logos.length)
})