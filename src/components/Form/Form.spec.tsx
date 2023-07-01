import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';
import { RecoilRoot } from 'recoil';

describe('Form Test', () => {
  it('should not add new participant when the input is empty', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
  
  
    const input = screen.getByPlaceholderText('New participant');
    const button = screen.getByRole('button');
  
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  }),

  it('should add new participant when the input is filled', () => {
    // Arrange: render the component and prepare requirements
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
  
    const input = screen.getByPlaceholderText('New participant');
    const button = screen.getByRole('button');

    // Act: perform user steps
    fireEvent.change(input, {
      target: { value: 'Ana Catarina' }
    });

    fireEvent.click(button);

    //Assert: expected results
    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  it('should not be allowed to add a repeated name to the list', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
  
    const input = screen.getByPlaceholderText('New participant');
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: { value: 'Ana Catarina' }
    });

    fireEvent.click(button);

    fireEvent.change(input, {
      target: { value: 'Ana Catarina' }
    });

    fireEvent.click(button);

    const errorAlert = screen.getByRole('alert');

    expect(errorAlert.textContent).toBe(
      'Nomes duplicados não são permitidos'
    );
  });
});