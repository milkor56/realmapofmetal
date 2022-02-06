import { bands }  from '../data.mjs'

const getBands = (req,res)=>{
    res.status(200).json({success:true,data: bands})
}

const createBand = (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true, bands:name}) // send({success:true,data: people})
}

const updateBand = (req, res) =>{
    const {id} = req.params // from the url
    const {name} = req.body // send the value

    const band = bands.find((band)=> band.id === Number(id))

    if(!band){
        return res.status(400).json({success:false,msg:`no band with id ${id}`})
    }
    const newBands = bands.map((band)=>{
        if(band.id === Number(id)){
            band.name = name
        }
        return band
    })
    res.status(200).json({success:true, data: newBands})
}

const deleteBand = (req, res) =>{
    const band = bands.find((band)=> band.id === Number(req.params.id))

    if(!band){
        return res.status(400).json({success:false,msg:`no band with id ${req.params.id}`})
    }
    const newBands = people.filter((band) => band.id !== Number(req.params.id))
    return res.status(200).json({success:true,data:newBands})
}

export {
    getBands,
    createBand,
    updateBand,
    deleteBand
}