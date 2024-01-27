export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function getShortString(
  originStr: string,
  startLength: number,
  endLength: number
) {
  // 返回originString的前startLength个字符和后endLength个字符，中间拼接***
  if (startLength < 0 || endLength < 0) {
    throw new Error('Start length and end length must be non-negative.')
  }

  if (startLength + endLength >= originStr.length) {
    return originStr // Return the entire string if startLength + endLength is greater than or equal to the string length.
  }

  const startSubstring = originStr.substring(0, startLength)
  const endSubstring = originStr.substring(originStr.length - endLength)

  return `${startSubstring}***${endSubstring}`
}
