import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}


describe('TodoFooter', () => {
    it('should render the correct amount of incomplete tasks', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
    
    it('should render "task" when the number of incomplete tasks is one', async () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    }); 
})


// it('should check if the number rendered matches with the prop passed', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeTruthy();
// });

// it('should check if the component is visible to the user', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={2} />);
//     const paragraphElement = screen.getByText(/2 tasks left/i);
//     expect(paragraphElement).toBeVisible();
// });

// it('should render the correct HTML element', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toContainHTML("p");
// })

// it('should render the element with a given text', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={900} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement).toHaveTextContent("900 tasks left");
// });

// it('should check if the given element is not falsy', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={900} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement).not.toBeFalsy();
// });

// it('should check if the given value is correct', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement.textContent).toBe("1 task left");
// });