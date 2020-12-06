import React, { useEffect, useState } from "react"
import "./clock.sass"
import {
	renderAmPm,
	renderMonth,
	renderWeekDay,
	runClock,
} from "./utils/clockFunctions"

function App() {
	const [clock, setClock] = useState(runClock())
	const [ampm, setAmpm] = useState("")
	const [date, setDate] = useState(
		`${renderWeekDay()}, ${renderMonth()} ${new Date().getDate()}`
	)
	const [year, setYear] = useState(new Date().getFullYear())

	useEffect(() => {
		const interval = setInterval(() => {
			setClock(runClock())
			setAmpm(renderAmPm)
		}, 1000)

		const dateInterval = setInterval(() => {
			setDate(`${renderWeekDay()}, ${renderMonth()} ${new Date().getDate()}`)
		}, 1000 * 60 * 60 * 24)

		const yearInterval = setInterval(() => {
			setYear(new Date().getFullYear())
		}, 1000 * 60 * 60 * 24 * 30 * 12)
		return () => {
			clearInterval(interval)
			clearInterval(dateInterval)
			clearInterval(yearInterval)
		}
	}, [])

	return (
		<main>
			<div id="clock">
				<div className="pulse"></div>
				<div className="clock-bg">
					<div>
						<span className="am-or-pm">{ampm}</span>
						<div id="main-clock">
							<h1>{clock}</h1>
						</div>
						<span className="date">{date}</span>
					</div>
				</div>
				<div className="year">{year}</div>
			</div>
		</main>
	)
}

export default App
