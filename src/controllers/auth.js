import {Users} from "../models/";
import bcrypt from "bcrypt";


const login = () => {

}

export const signup = async (req, res) => {
    //Obtener todos los campos que ha enviado el cliente
    const {firstName, lastName, email, password} = req.body;
    try{
        let hashPassword = bcrypt.hashSync(password, 10);
        let results = await Users.findOrCreate({defaults: {firstName, lastName, email, password: hashPassword}, where: {email}});
        console.log(results[1]);
        res.status(201).json(results);
    }catch(error){
        res.status(500).json({
            message: "Hubo un error al tratar de registrar el usuario en el sistema",
            error
        })
    }
}

const resetPassword = () => {

}

const updatePassword = () => {

}

