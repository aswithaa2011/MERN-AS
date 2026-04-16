

export const createController=(req,res)=>{

    console.log(req.body)

    res.json({
        "messsage":"success"
    })

}

export const getUserByParams=(req,res)=>{

    console.log(req.params)

    res.json({
        "message":"params passed"
    })


}