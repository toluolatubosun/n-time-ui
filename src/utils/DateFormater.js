const DateFormater = (dateTime) => {
    // convert from utc to local timezone
    let date = new Date(dateTime)
    return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`

}

export default DateFormater