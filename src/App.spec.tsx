import { render } from '@testing-library/react'
import Button from "./components/Button"

test('Verify is type button and text in button', () => {
    const { getByText, debug } = render(<Button text='teste' type='submit' />)
    debug()

    expect(getByText("teste")).toBeTruthy()
})