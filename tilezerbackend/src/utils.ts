//import { NewDiaryEntry } from './services/types'

const parseComment = (commentFromRequest: any) : String => {
    if(!isString(commentFromRequest)  
    //typeof commentFromRequest === 'string'
    ){
        throw new Error('Incorrect or missing comment')
    }
    return commentFromRequest 
}

const isDate = (date: string): boolean =>{ 
    return Boolean(Date.parse(date))
}

// const parseWeather = () => { } 

const isString = (string: string): boolean => { // ValuetoEvaluate instance type => returns a bolean
    return typeof string === 'string'
    // if (typeof string === 'string' || string instanceof String ){ }
}
/*
const toNewDiaryEntry = (object: any) : NewDiaryEntry => {
    const newEntry: NewDiaryEntry = { 
        comment: parseComment(object.comment)
    }
    return newEntry
}*/

export default isDate //toNewDiaryEntry