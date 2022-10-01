
export const shuffleArray = (arr, num) => {
    const shuffled = [...arr].sort((a, b) => 0.5 - Math.random())
    return shuffled.slice(0, num)
}

export const currentDate = () => {
    const date = new Date().toDateString()
    const time = new Date().toTimeString().slice(0, 5)
    const formatedDate = `${date} ${time}`
    return formatedDate
}