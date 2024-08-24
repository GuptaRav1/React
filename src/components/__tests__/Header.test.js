import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it('Should render Header with Login Button', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByText("Login")
  expect(loginButton).toBeInTheDocument()

})

it('Should render Cart Items in the Header', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const cartItems = screen.getByText("Cart - (0 items)")
  expect(cartItems).toBeInTheDocument()

})

it('Should render Only Cart in the Header', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const cartItems = screen.getByText(/Cart/)
  expect(cartItems).toBeInTheDocument()

})

it('Should change login to logout on click', () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const loginButton = screen.getByText("Login")
  fireEvent.click(loginButton)
  const logoutButton = screen.getByText("Logout")
  expect(logoutButton).toBeInTheDocument()

})