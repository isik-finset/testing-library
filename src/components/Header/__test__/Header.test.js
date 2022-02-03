import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    it('should render same text passed into the title props', () => {
      render(<Header title="My Header" />);
      const headingElement = screen.getByText(/my header/i);
      expect(headingElement).toBeInTheDocument();
    });
})


// it('should render same text passed into the title props', () => {
//   render(<Header />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into the title props', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole("heading", {name: "My Header"});
//     expect(headingElement).toBeInTheDocument();
// });


// it('should render by title', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle("wassup");
//     expect(headingElement).toBeInTheDocument();
// })


// it('should render by id', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTestId("header-1");
//     expect(headingElement).toBeInTheDocument();
// });

// // FIND BY
// it('should render the same text passed into the title prps', async () => {
//     render(<Header title="My Header"/>);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
// })

// // QUERY BY
// it('should render the same text passed into the title prps', async () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
// })

// // GETALLBY
// it('should render all the headers inside the document', () => {
//     render(<Header title="My Header" />);
//     const headingElements = screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
// });

// // GETBYTEXT
// it('should render the same text passed into the props of the title', () => {
//     render(<Header title="Lions" />);
//     const headingElement = screen.getByText(/lions/i);
//     expect(headingElement).toBeInTheDocument();
// });