export function toTimestamp(strDate: string) {
  let myDate = strDate.split('.')
  var newDate = new Date(
    Number(myDate[2]),
    Number(myDate[1]) - 1,
    Number(myDate[0])
  )

  return newDate.getTime()
}
