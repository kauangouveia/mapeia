import { render } from '@testing-library/react'
import { Mapeia } from "."

test('Test if iframe has src for site mapeia', () => {
    const { getByTestId } = render(
        <Mapeia />
    )

    expect(getByTestId('mapeia-id')).toHaveAttribute("src", "https://www.mapeia.com.br")
})  