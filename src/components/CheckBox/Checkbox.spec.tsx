import { render, waitFor } from '@testing-library/react'
import { Checkbox } from "."

test('Realize test in element checkBox', () => {
    const { getByText, debug, queryByTestId } = render(
        <Checkbox
            id='textForTest'
            labelText='textForTest'
            registerText='checkboxTest'
            value='MOTORCYCLE'
        />
    )

    expect(getByText("textForTest"))

    expect(queryByTestId("checkbox-id")).toHaveAttribute('value', 'MOTORCYCLE');

    debug()
})