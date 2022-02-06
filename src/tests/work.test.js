import { screen, render } from '@testing-library/react';
import Work from '../components/work';
import { projects } from '../data';

test('work page renders with images and links successfully', () => {
    const { container } = render(<Work/>)
    const projectImages = screen.getAllByRole('img')
    const links = screen.getAllByRole('link')

    expect(projectImages).toHaveLength(projects.length)
    expect(links).toHaveLength(projects.length)
    links.forEach(link => {
        expect(link).toBeEnabled()
    })
    expect(container).toMatchSnapshot()
})