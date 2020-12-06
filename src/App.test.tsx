import React from "react"
import { render } from "@testing-library/react"
import App from "./App"
import { renderMonth, renderWeekDay, runClock } from "./utils/clockFunctions"

test("Renders Current Year in Page", () => {
	const { getByText } = render(<App />)
	// const linkElement = screen.getByText(//i)
	const currentYear = getByText(new Date().getFullYear())
	expect(currentYear).toBeInTheDocument()
})

test("Timer is rerendering per second", () => {
	const { getByText } = render(<App />)
	const currentTime = getByText(runClock())
	expect(currentTime).toBeInTheDocument()
	setTimeout(() => {
		expect(getByText(runClock())).toBeInTheDocument()
	}, 3000)
})

test("Bottom text is getting displayed correctly", () => {
	const { getByText } = render(<App />)
	const currBottomLine = getByText(
		`${renderWeekDay()}, ${renderMonth()} ${new Date().getDate()}`
	)
	expect(currBottomLine).toBeInTheDocument()
})
