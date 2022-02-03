import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodos = jest.fn();

describe('Add Input', () => {
    // will check if the input element exists inside the DOM
    it('should render input element', async () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockSetTodos}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });


    // will check if the input change works properly, when typed any value
    it('should be able to type in input', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
        expect(inputElement.value).toBe("Go grocery shopping");
    });


    // will check if the input will be empty when add button is clicked
    it('should have empty input when add button is clicked', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } });
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    });
});