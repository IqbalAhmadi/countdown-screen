let countdown = () => {
    let countDate = new Date("October 30, 2022 00:00:00").getTime()
    // getting the difference between now and future 
    let now = new Date().getTime()
    let gap = countDate - now

    // math 
    let second = 1000
    let minute = second * 60
    let hour = minute * 60
    let day = hour * 24

    // calculation
    let textDay = Math.floor(gap / day) 
    let textHour = Math.floor((gap % day) / hour) 
    let textMinute = Math.floor((gap % hour) / minute)
    let textSecond = Math.floor((gap % minute) / second)

    // updating html
    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond
}

// call function
setInterval(countdown, 1000)

