const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    // res.send('Testing') // terminates the whole cycle or could pass it onto the next middleware
    next() // pass it onto the next middleware
}

module.exports = logger