const express = require('express')
const configViewEngine = (app) => {
    app.use(express.static('./front-end'))
}

export default configViewEngine;