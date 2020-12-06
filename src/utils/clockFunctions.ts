function runClock() {
	return `${renderHours()}:${renderMinutes()}:${renderSeconds()}`
}

function renderMinutes() {
	const minutes = new Date().getMinutes()
	if (minutes.toString().length === 1) return "0" + minutes
	return minutes
}

function renderHours() {
	const hour = (((new Date().getHours() + 11) % 12) + 1).toString()
	if (hour.length === 1) return "0" + hour
	return hour
}

function renderSeconds() {
	const seconds = new Date().getSeconds().toString()
	if (seconds.length === 1) return "0" + seconds
	return seconds
}

function renderAmPm() {
	const hours = new Date().getHours()
	const ampm = hours >= 12 ? "PM" : "AM"
	return ampm
}

function renderMonth() {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	]
	return months[new Date().getMonth()]
}

function renderWeekDay() {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]
	return days[new Date().getDay()]
}
export { renderAmPm, renderWeekDay, renderMonth, runClock }
