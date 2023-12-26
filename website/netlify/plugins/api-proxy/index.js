module.exports = {
  onPreBuild: ({ netlifyConfig }) => {
    const endpoint = process.env.PROXY_API_ENDPOINT
    console.log('endpoint', endpoint)
    // Add redirects
    netlifyConfig.redirects.unshift({
      from: '/api/*',
      to: endpoint + '/:splat',
      status: 200,
      force: true
    })
  }
}
