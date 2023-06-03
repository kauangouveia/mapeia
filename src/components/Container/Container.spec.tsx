import { render } from '@testing-library/react'
import { Container } from "."

test('Test Container has children', () => {
    const { getByText, debug } = render(
        <Container>
            <h1>Test children</h1>
        </Container>
    )

    expect(getByText('Test children')).toBeInTheDocument
    debug()
})