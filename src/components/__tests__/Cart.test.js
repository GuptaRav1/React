import { act } from "react"
import RestaurantMenu from '../RestaurantMenu'
import MOCK_DATA from '../../components/mocks/mockResMenu.json'
import { fireEvent, screen, render } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from '../../utils/appStore'
import Header from '../Header'
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'
import Cart from '../Cart'

global.fetch = jest.fn(function () {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })

})

it('Should render Menu component', async function () {
  await act(async () => render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </BrowserRouter>
  ))

  const accordianHeader = screen.getByText('Rice Bowls (9)')
  fireEvent.click(accordianHeader)
  const foodItems = screen.getAllByTestId('foodItems')
  expect(foodItems.length).toBe(9)

  expect(screen.getByText('Cart - (0 items)')).toBeInTheDocument()
  const addBtns = screen.getAllByRole('button', { name: 'ADD +' })
  fireEvent.click(addBtns[0])

  expect(screen.getByText('Cart - (1 items)')).toBeInTheDocument()
  fireEvent.click(addBtns[1])
  expect(screen.getByText('Cart - (2 items)')).toBeInTheDocument()

  expect(screen.getAllByTestId('foodItems').length).toBe(11)

  fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }))
  expect(screen.getAllByTestId('foodItems').length).toBe(9)

  expect(screen.getByText('Your Cart is Empty. Add Items to the Cart')).toBeInTheDocument()

})