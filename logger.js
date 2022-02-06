const datetime = (req, res, next) => {
    const date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    let ymddatetime = year + "-" + month + "-" + date;
    let fulldatetime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    let justtime = hours + ":" + minutes;

    return fulldatetime
}

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = datetime();
    console.log(method, url, time)
    // res.send('Testing') // terminates the whole cycle or could pass it onto the next middleware
    next() // pass it onto the next middleware
}

// module.exports = logger
export {logger}