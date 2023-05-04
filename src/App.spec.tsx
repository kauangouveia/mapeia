import { render } from '@testing-library/react'
import Button from "./components/Button"

test('sum', () => {
    const { getByText } = render(<Button text='teste' type='submit' />)


    expect(getByText("teste")).toBeTruthy
})