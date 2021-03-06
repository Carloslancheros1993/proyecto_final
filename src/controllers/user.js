import {Users} from "../models/";

export const getAll = async (req, res) => {
   try{
    let results = await Users.findAll();
    res.json(results)
   }catch(error){
    res.status(500).json({
        message: "Hubo un error al tratar de procesar tu petición",
        error,
      });
   }
  };


export const getById = async (req, res) => {
   try{

   }catch(error){
       
   }
  };

export const create = async (req, res) => {
    try{
 
    }catch(error){
        
    }
   };

export const updateOne = async (req, res) => {
    try{
 
    }catch(error){
        
    }
   };
export const deleteOne = async (req, res) => {
    try{
 
    }catch(error){
        
    }
   };
  
  