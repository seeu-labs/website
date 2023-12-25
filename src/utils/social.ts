export const onShareX = async (
  title: string,
  url?: string,
  tags?: string[]
) => {
  let query = `text=${title}`
  if (tags?.length) {
    query += `&hashtags=${tags.join(',')}`
  }
  if (url) {
    query += `&url=${url}`
  }
  window.open(`https://twitter.com/intent/tweet?${query}`)
}
