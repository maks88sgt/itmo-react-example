export interface Asteroid {
    name: string
    id: string
    date: string
    distance: {
        lunar: number
        kilometers: number
    }
    size: number
    isDangerous: boolean
}