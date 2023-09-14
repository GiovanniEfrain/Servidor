export interface MaterialEntry { 
    id: number,
    title: string,
    feature: string,
    description: string,
    package: string
} 

export type NonSensitiveInfoDiaryEntry = Pick<MaterialEntry, "title">
