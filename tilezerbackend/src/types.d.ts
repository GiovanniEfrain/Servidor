export type categories = '' | '' | '' | '' | ''
export type model = '' | '' | '' | '' | ''

export interface DiaryEntry { 
    id: number,
    date: string,
} 
const DiaryOREntry = 'id' | 'date'

// Herencia 
interface SpecialDiaryEntry extends DiaryEntry {
    idT: number
}

export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, DiaryOREntry>
//export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'Fetching Data'>

/*
// Para compocision 
type SpecialDiaryEntr2 = DiaryEntry & {
    idO: number
}
*/
