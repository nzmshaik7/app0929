export interface UserInterface {
    id?: string, // may be for our implementation we don't need userid
    username: string,
    totalScore: number,
    totalQuestionsAnswered: number,
    cummulativePoints: number,
}
