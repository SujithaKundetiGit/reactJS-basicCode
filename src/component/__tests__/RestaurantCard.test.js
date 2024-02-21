import { render, screen } from "@testing-library/react";
import RestaurantComp from "../Restaurants";
import MOCK_DATA from "../mocks/restaurantsCardMock.json";
import "@testing-library/jest-dom";

it("Should render restaurant component with props", () => {
    render(<RestaurantComp resData={MOCK_DATA}/>);
    const name = screen.getByText("Wow! Momo");
    expect(name).toBeInTheDocument();
})