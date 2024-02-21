import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case", () => {
    // beforeAll(() => {
    //   console.log("Before All");
    // });
  
    // beforeEach(() => {
    //   console.log("Before Each");
    // });
  
    // afterAll(() => {
    //   console.log("After All");
    // });
  
    // afterEach(() => {
    //   console.log("After Each");
    // });
  
    it("Should load contact us component", () => {
      render(<ContactUs />);
  
      const heading = screen.getByRole("heading");
  
      // Assertion
      expect(heading).toBeInTheDocument();
    });
  
    it("Should load button inside Contact component", () => {
        render(<ContactUs />);
  
      const button = screen.getByRole("button");
  
      // Assertion
      expect(button).toBeInTheDocument();
    });
  
    it("Should load input name inside Contact component", () => {
        render(<ContactUs />);
  
      const inputName = screen.getByPlaceholderText("Message");
  
      // Assertion
      expect(inputName).toBeInTheDocument();
    });
  
    it("Should load 2 input boxes on the Contact component", () => {
        render(<ContactUs />);
  
      // Querying
      const inputBoxes = screen.getAllByRole("textbox");
  
      //console.log(inputBoxes.length);
  
      // Assertion
  
      expect(inputBoxes.length).toBe(2);
    });
});