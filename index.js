// viewer-request.js
exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request
    request.headers['x-forwarded-host'] = [
      { key: 'X-Forwarded-Host', value: request.headers.host[0].value }
    ]
    console.log(JSON.stringify(request.headers));
    return callback(null, request)
}