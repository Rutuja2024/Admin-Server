module.exports = (req , res, next) =>
{
    res.header("Content-range", "users 0-20/20")

    next()
}