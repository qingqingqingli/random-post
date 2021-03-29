import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App";

describe('Testing react navigation', () => {
    test('Post Screen contains the header and 100 items', async () => {

        const component = (<App />);
        const { findByText, findAllByText } = render(component);

        const header = await findByText('Post Screen');
        const items = await findAllByText(/Post ID:/);

        expect(header).toBeTruthy();
        expect(items.length).toBe(100);
    });


});
