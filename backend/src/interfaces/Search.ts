import { Router } from 'express'

export interface ResultsArray {
    [index: number]: ResultsObject
}

export interface ResultsObject {
    typeName: string
    repository: RepositoryMatch
    file: FileMatch
    lineMatches: LineMatch[]
}

export interface RepositoryMatch {
    name: string
    url: string
}

export interface FileMatch {
    name: string
    path: string
    url: string
    content: string
    commit: Node
}

export interface LineMatch {
    preview: string
    lineNumber: number
    offsetAndLengths: number[][]
    limitHit: boolean
}

export interface RoutesObject {
    default: (argument0: Router) => void
}
