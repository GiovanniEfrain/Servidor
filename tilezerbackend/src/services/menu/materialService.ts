import { NonSensitiveInfoDiaryEntry } from '../types'
import materialData from './material.json'
import { MaterialEntry } from './types.m'

const materials: MaterialEntry[] = materialData as unknown as MaterialEntry[]

export const getEntries = () : MaterialEntry[] => materials

// ---------------------------------------------------------

export const getEntriesWithoutSensitiveInfo = () : NonSensitiveInfoDiaryEntry[] => {
    return materials.map( ({ id, title, feature, description }) => {
        return { 
            id, title, feature, description 
        } 
    })

}
