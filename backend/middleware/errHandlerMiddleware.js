

const errHandler = (err, req, res )=> {

    const statusCode = res.statusCode ? res.statusCode : 500 

        if(statusCode){
           res.status(500)
           res.json({
             message: err.message
           })
        }


}

module.exports = errHandler