import express from 'express'

import * as diaryService from '../../services/diaryService'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.post('/', (_req, res) => {

    try {
        res.send('Saving diary')
        const { 
        //    ...diaryEntry
         } = _req.body
    
       // const newDaiaryEntry = toNewDiaryEntry(_req.body)
    
        const newDiaryEntry = diaryService.addEntry(
            // diaryEntry Attributes
        )
    
        res.json(newDiaryEntry)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.get('/:id' , (req, res) => {
    const diary = diaryService.findById(+req.params.id)
   
    return (diary !== null) ? res.send(diary?.date)
    : res.sendStatus(404) // res.send(diaryService.getEntriesWithoutSensitiveInfo())

})


    /*
    export const findById = (id: number) : NonSensitiveInfoDiaryEntry | undefined => { 
        if(entry != null){
            const {date, ...restOfDiary } = entry
            return restOfDiary
        }
        return undefiend
    }
    */

export default router;