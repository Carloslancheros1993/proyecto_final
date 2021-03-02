import {Users, ResetTokens} from "../models/";
import bcrypt from "bcrypt";
import {sign} from "../utils/jwt"
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      let user = await Users.findOne({ where: { email } });
      if (user) {
        let hashPassword = user.password;
        let valid = bcrypt.compareSync(password, hashPassword);
        let userObj = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        };
        if (valid) {
          return res.status(200).json({
            message: "Has iniciado sesión correctamente",
            token: sign(userObj),
          });
        }
        return res.status(401).json({
          message: "Las credenciales son incorrectas",
        });
      } else {
        res.status(401).json({
          message: "Las credenciales son incorrectas",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error al tratar de autenticar al usuario en el sistema",
        error,
      });
    }
  };
  

export const signup = async (req, res) => {
    //Obtener todos los campos que ha enviado el cliente
    const {firstName, lastName, email, password} = req.body;
    try{
        let hashPassword = bcrypt.hashSync(password, 10);
        let results = await Users.findOrCreate({defaults: {firstName, lastName, email, password: hashPassword}, where: {email}});
        if(results[1]){
            res.status(201).json(results[0]);
        }else{
            res.status(400).json(
                {
                    message: "Ya existe el usuario en el sistema"
                }
            );
        }
    }catch(error){
        res.status(500).json({
            message: "Hubo un error al tratar de registrar el usuario en el sistema",
            error
        })
    }
}

export const resetPassword = async (req, res) => {
    const {email} = req.body;
    try{
        let user = await Users.findOne({where: {email}});
        if(user){
            let userID = user.id;
            let resetTokenObj = {
                token: uuidv4(),
                expirationDate: moment().add(1, "day"),
                userId: userID,
                active: true
            }
            let results = await ResetTokens.create({resetTokenObj});
            console.log(results);
            res.status(200).json({ message: "correo electronico"});
        }
        return res.status(200).json({
            message: "Se enviara un correo electronico a la dirección de la cuenta para restblecer la contraseña",
        });
    }catch(error){

    }
};

const updatePassword = () => {

}

