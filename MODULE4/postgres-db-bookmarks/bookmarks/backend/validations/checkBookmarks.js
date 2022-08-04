const checkName = (req, res, next) => {
    console.log("name is being checked");
    if (req.body.name) {
        console.log("we've got a name here!");
        next();
    } else {
        res.status(400).json({error: "We need a name..."})
    }
}

const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body
    if (is_favorite === "true" ||
        is_favorite === "false" ||
        is_favorite === undefined
        ) {
        console.log(is_favorite)
        next()
    } else {
        res.status(400).json({error: "is_favorite should be a boolean"})
    }
}

module.exports = { checkName, checkBoolean }