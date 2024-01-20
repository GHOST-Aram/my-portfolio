import { screen, render } from "@testing-library/react";
import LocationAddress from "./LocationAddress";

describe('Location Address', () => {
    test('Renders city name, country and street', () =>{
        render(<LocationAddress city='Kisumu' country='Kenya' street='Maseno' />)

        const cityName: HTMLElement = screen.getByText(/Kisumu/i)
        const countryName: HTMLElement = screen.getByText(/Kenya/i)
        const streetName: HTMLElement = screen.getByText(/Maseno/i)

        expect(cityName).toBeInTheDocument()
        expect(countryName).toBeInTheDocument()
        expect(streetName).toBeInTheDocument()


    })
})