
export const shuffleArray = (arr, num) => {
    const shuffled = [...arr].sort((a, b) => 0.5 - Math.random())
    return shuffled.slice(0, num)
}