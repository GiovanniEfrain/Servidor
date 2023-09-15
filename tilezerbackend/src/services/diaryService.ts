import { DiaryEntry, NonSensitiveInfoDiaryEntry } from './types'
import diaryData from './diaries.json'

// ----------- Array -------------
const diaries: DiaryEntry[] = diaryData as unknown as DiaryEntry[]

export const getEntries = () : DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date }) => {
        return {
            id, date
        }
    })
}

export const addEntry = () : undefined => undefined
// export const addEntry = ( date: String, weaather: Wheather ) : DiaryEntry => { const newDiaryEntry = { id: diaries.length + 1, date }  diaries.push(newDaiaryEntry) }

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
// diariesWithoutSensitiveInfo[0]
