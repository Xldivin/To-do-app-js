import { render, screen } from "@testing-library/react";
import Taskadd from "../Taskadd";

it("should render the role of title",  () => {
    render(<Taskadd  />);
    const headingelement = screen.getByTitle("header")
    expect(headingelement).toBeInTheDocument;
});


it("should render something which is not in react page",  () => {
    render(<Taskadd  />);
    const headingelement = screen.queryByText(/dogs/i)
    expect(headingelement).not.toBeInTheDocument;
});

it("should render something which is not in react page",  () => {
    render(<Taskadd  />);
    const headingelements = screen.getAllByRole("heading")
    expect(headingelements.length).toBe(1);
});

it("should render something if it visible to the user",  () => {
    render(<Taskadd  />);
    const headingelements = screen.getByTestId("head")
    expect(headingelements).toBeVisible
});

it("should render the the label",  () => {
    render(<Taskadd  />);
    const headingelement = screen.getByTitle("desc")
    expect(headingelement).toBeInTheDocument;
});


it("should render see if the button is visible to the user",  () => {
    render(<Taskadd  />);
    const headingelements = screen.getByTitle("button")
    expect(headingelements).toBeVisible
});

it("should render see if the input is visible to user",  () => {
    render(<Taskadd  />);
    const headingelements = screen.getByTitle("input")
    expect(headingelements).toBeVisible
});

it("should render see if the input1 is visible to user",  () => {
    render(<Taskadd  />);
    const headingelements = screen.getByTitle("input1")
    expect(headingelements).toBeVisible
});

it("should render see if the form is visible to user",  () => {
    render(<Taskadd  />);
    const headingelements = screen.getByTestId("form")
    expect(headingelements).toBeVisible
});