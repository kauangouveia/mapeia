import { render } from '@testing-library/react'
import { MyInput } from "."

test('Test input is in de document, if text too, test if input has attributes type and placeholder right', () => {
    const { queryByTestId, getByText, debug } = render(
        <MyInput registerText='input test' size='200px' textLabel='Test Input' textPlaceholder='Placeholder test' type='text' />
    )

    expect(queryByTestId("input-id")).toBeInTheDocument()
    expect(getByText("Test Input")).toBeInTheDocument()
    expect(queryByTestId("input-id")).toHaveAttribute('type', 'text')
    expect(queryByTestId("input-id")).toHaveAttribute('placeholder', 'Placeholder test')
  

    debug()
})