import jwt from "jsonwebtoken";

export const sign = (payload) => {
    try{
        let token = jwt.sign(payload, process.env.SECRET_KEY, {algorithm: "HS256", expiresIn: "1hr"});
        return token;
    }catch(error){
        console.log(error);
        throw new Error("Error al tratar de firmar el token");
    }

}