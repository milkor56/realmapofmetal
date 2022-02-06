import { people } from '../data.mjs'

const getMembers = (req,res)=>{
    res.status(200).json({success:true,data: people})
}

const createMember = (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true, person:name}) // send({success:true,data: people})
}

const updateMember = (req, res) =>{
    const {id} = req.params // from the url
    const {name} = req.body // send the value

    const person = people.find((person)=> person.id === Number(id))

    if(!person){
        return res.status(400).json({success:false,msg:`no person with id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data: newPeople})
}

const deleteMember = (req, res) =>{
    const person = people.find((person)=> person.id === Number(req.params.id))

    if(!person){
        return res.status(400).json({success:false,msg:`no person with id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({success:true,data:newPeople})
}

export {
    getMembers,
    createMember,
    updateMember,
    deleteMember
}