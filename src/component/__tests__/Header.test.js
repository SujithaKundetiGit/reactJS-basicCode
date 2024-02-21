import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render header with login component", () => {
    render(
        //as we use Link tag so we need browser router.
        <BrowserRouter> 
        // as we use useSelector and so in header components
        <Provider store={appStore}> 
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByRole("button",{name: "Login"}); // if there are multiple buttons and need only one button
    expect(cartItems).toBeInTheDocument();
})
it("Should render header with login component", () => {
    render(
        //as we use Link tag so we need browser router.
        <BrowserRouter> 
        // as we use useSelector and so in header components
        <Provider store={appStore}> 
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/); // redux syntax
    expect(cartItems).toBeInTheDocument();
})
it("Should change Login Button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", { name: "Login" });
  
    fireEvent.click(loginButton);
  
    const logoutButton = screen.getByRole("button", { name: "Logout" });
  
    expect(logoutButton).toBeInTheDocument();
  });