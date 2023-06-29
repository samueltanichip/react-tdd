import { render, screen } from '@testing-library/react';
import { Form } from './Form';


describe('Form Test', () => {
  it('should not add new participants when the input is empty', () => {
    // Arrange: render the component
    render(<Form />);
  
    const input = screen.getByPlaceholderText('New participant');
    const button = screen.getByRole('button');
  
    //Assert: expected results
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});