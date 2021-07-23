const date = new Date()

const dateDay = date.getDay()

//요일 추출 함수
function WeekDay(date) {
    switch (date) {
        case 0:
            return `일요일`
        case 1:
            return `월요일`
        case 2:
            return `화요일`
        case 3:
            return `수요일`
        case 4:
            return `목요일`
        case 5:
            return `금요일`
        case 6:
            return `토요일`
        default:
            return '아무요일아님 ㅋㅋ'
    }
}
//요일 함수
const nowDay = WeekDay(dateDay)
console.log(nowDay)

//년도 월 일 변수
const yearMonthDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
}월 ${date.getDate()}일`

export { yearMonthDate, nowDay }
