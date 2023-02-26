export interface BaseState {
    state: 'EMPTY' | 'LOADING' | 'SUCCESS' | 'ERROR',
    error?:any
}
