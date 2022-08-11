import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todos from './Todos'

describe('Todos testing', () => {
  test('Add todo', () => {
    render(<Todos />)

    const firstTodo = 'First Todo'

    const input = screen.getByPlaceholderText('todo')
    const button = screen.getByText('Add todo')

    fireEvent.change(input, { target: { value: firstTodo } })
    fireEvent.click(button)

    screen.getByText(firstTodo)
  })

  test('Add tod by userEvent', () => {
    render(<Todos />)
    const input = screen.getByPlaceholderText('todo')
    const button = screen.getByText('Add todo')
    const list = screen.getByTestId('todo-list')

    expect(list.childElementCount).toBe(0)

    const firstTodo = 'First todo'

    userEvent.type(input, firstTodo)
    userEvent.click(button)

    screen.getByText(firstTodo)

    expect(list.childElementCount).toBe(1)

    const secondTodo = 'Second todo'

    userEvent.type(input, secondTodo)
    userEvent.click(button)

    screen.getByText(secondTodo)

    expect(list.childElementCount).toBe(2)

    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)
    userEvent.click(button)

    expect(list.childElementCount).toBe(2)
  })
})
