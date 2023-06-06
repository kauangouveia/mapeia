import { render } from '@testing-library/react'
import { Button } from "."

test('Verify is type button and text in button', () => {
    const { getByText, debug } = render(<Button text='text for test error' type='submit' />)

    debug()

    expect(getByText("text for test")).toHaveAttribute('type', 'submit')
})