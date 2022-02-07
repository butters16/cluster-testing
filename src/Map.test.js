import {render, screen} from "@testing-library/react";
import Map from "./Map";

test('renders a marker', () => {
    render(<Map/>);
    screen.getByAltText('Solo');
});
