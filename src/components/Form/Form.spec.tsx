import { act, fireEvent, render, screen } from '@testing-library/react';
import { Form } from './Form';
import { RecoilRoot } from 'recoil';

describe('Form Tests', () => {
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

  it('should display an error message when trying to add a repeated name', () => {
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

  it('should disappear with the error message after timers', () => {
    jest.useFakeTimers();

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

    // queryBy is used when it is okay for the element to
    // be null, it will not fail the test like getBy would
    let errorAlert = screen.queryByRole('alert');

    expect(errorAlert).toBeInTheDocument();

    // fire events that update state
    act(() => {
      jest.runOnlyPendingTimers();
    });

    errorAlert = screen.queryByRole('alert');

    jest.clearAllTimers();
    expect(errorAlert).toBeNull();
  });
});