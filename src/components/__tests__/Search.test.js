import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import { act } from "react"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA)
    }
  })
})

it("should render body component with search field", async () => {
  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))


  const cards_before_search = screen.getAllByTestId('resCard')
  expect(cards_before_search.length).toBe(20)

  const searchBtn = screen.getByRole("button", { name: "search" })
  const searchInput = screen.getByTestId("searchInput")
  fireEvent.change(searchInput, { target: { value: 'burger' } })
  fireEvent.click(searchBtn)
  const cards = screen.getAllByTestId('resCard')
  expect(cards.length).toBe(5)
})

it("should filter top rated restaurants", async () => {
  await act(async () => render(<BrowserRouter><Body /></BrowserRouter>))

  const cards_before_filter = screen.getAllByTestId('resCard')
  expect(cards_before_filter.length).toBe(20)

  const filterBtn = screen.getByRole('button', { name: 'Top Rated Restaurants' })
  fireEvent.click(filterBtn)
  const cardsAfterFilter = screen.getAllByTestId('resCard')
  expect(cardsAfterFilter.length).toBe(9)
})

// beforeAll()
// beforeEach()
// afterAll()
// afterEach()