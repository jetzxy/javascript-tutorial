import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"

const today = dayjs()
const dayString = today.add(1, "month")
const dayStringFormat = dayString.format("MMMM D")
const subDayString = today.subtract(1, "month")
const subDayStringFormat = subDayString.format("MMMM D")

console.log(dayjs().format("dddd"))

function isWeekend(date) {
  const dayOfWeek = date.format("dddd")
  return dayOfWeek === "Saturday" || dayOfWeek === "Sunday"
}

let date = dayjs()
console.log(date.format("dddd, MMMM D"))
console.log(isWeekend(date))
date = dayjs().add(2, "day")
console.log(date.format("dddd, MMMM D"))
console.log(isWeekend(date))

date = dayjs().add(4, "day")
console.log(date.format("dddd, MMMM D"))
console.log(isWeekend(date))

date = dayjs().add(6, "day")
console.log(date.format("dddd, MMMM D"))
console.log(isWeekend(date))
