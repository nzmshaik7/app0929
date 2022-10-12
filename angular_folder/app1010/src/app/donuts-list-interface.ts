
export interface DonutListResultsInterface {
    count: number,
    results: DonutInfoInterface[]
}

export interface DonutInfoInterface {
    id: number,
    ref: string,
    name: string,
    photo: string,
    photo_attribution: string
}

