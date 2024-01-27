export function buildQueryString(paramsObject: object) {
  const params = new URLSearchParams()

  // Loop through the parameters and append them to the URLSearchParams
  for (const [key, value] of Object.entries(paramsObject)) {
    if (value !== undefined) {
      params.append(key, value)
    }
  }

  // Return the formatted query string
  return params.toString()
}
