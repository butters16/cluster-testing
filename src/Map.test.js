import {render, screen} from "@testing-library/react";
import Map from "./Map";

test('renders a marker', async () => {
    render(<Map/>);

    // inspired by https://stackoverflow.com/a/57646705
    Object.defineProperty(window.map.getContainer(), "clientWidth", { value: 800 });
    Object.defineProperty(window.map.getContainer(), "clientHeight", { value: 600 });
    window.map.invalidateSize(true);

    await screen.findByAltText('Solo');
});
