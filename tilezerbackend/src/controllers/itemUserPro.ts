import { Request, Response } from "express";
import { handleHttp } from "../util/error.handle";

import { userModel } from '../models/index'

/*
* 
* @param {*} req
* @param {*} res
* 
*/

const getItem = (req: Request, res: Response) => {
    try{
        
    }catch (e){
        handleHttp(res, 'Error get item' )
    }
};

const getItems = (req: Request, res: Response) => {
    try{

    }catch (e){
        handleHttp(res, 'Error get items' )
    }
};

const updateItem = (req: Request, res: Response) => {
    try{
        
    }catch (e){
        handleHttp(res, 'Error update item' )
    }
}

const deleteItem = (req: Request, res: Response) => {
    try{

    }catch (e){
        handleHttp(res, 'Error delete item' )
    }
};

const postItem = async (req: Request, res: Response) => {
    try{
        const { body } = req
        console.log(body)
        res.send({algo: 1})
    }catch (e){
        handleHttp(res, 'Error post item' )
    }
};

module.exports = { getItem, getItems, deleteItem, postItem, updateItem }
