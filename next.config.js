const redirectUri = process.env.REDIRECT_URI
  ? new URL(process.env.REDIRECT_URI).pathname
  : "/callback";

module.exports = {
    async redirects() {
        return [
          {
            source: redirectUri,
            destination: '/redirect',
            permanent: true,
          },
        ]
      },
}