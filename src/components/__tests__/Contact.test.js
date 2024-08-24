import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us page Test Cases", () => {
  test('Should render contact page in browser.', () => {
    render(<Contact />)

    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()

  })

  test('Should render button in contact.', () => {
    render(<Contact />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()

  })

  test('Should render input name inside contact.', () => {
    render(<Contact />)

    const inputName = screen.getByPlaceholderText('name')

    expect(inputName).toBeInTheDocument()

  })

  test('Should load all input boxes', () => {
    render(<Contact />)

    const inputBoxes = screen.getAllByRole('textbox')

    expect(inputBoxes.length).toBe(2)

  })
})



