const msjP = (msj)=>{
    console.log(`\x1b[33m *** ${msj} *** \x1b[0m`);
}

const msjPError = (msj)=>{
    console.log(`\x1b[31m *** ${msj} *** \x1b[0m`);
}

const respApi = (res, msg, data)=>{
    res.json({
        msg: msg,
        total: data.length,
        data: data
    })
}

module.exports = { msjP ,msjPError, respApi }