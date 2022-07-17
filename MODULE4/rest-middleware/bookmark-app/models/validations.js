const validateURL = (req, res, next) => {
    console.log("This function checks the validity of the URL entered by the user");
    //we MUST invoke the `next()` function in order to continue in the execution of our code
    next();
};
// we can export many functions in our exports
// same as writing { validateURL : validateURL }
module.exports = { validateURL }