export function toTimestamp(strDate: string) {
  let myDate = strDate.split(' ')

  let date = myDate[0].split('/')
  let hour = myDate[1].split(':')

  var newDate = new Date(
    Number(date[2]),
    Number(date[1]) - 1,
    Number(date[0]),
    Number(hour[0]),
    Number(hour[1])
  )

  return newDate.getTime()
}
