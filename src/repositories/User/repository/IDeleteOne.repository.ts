export interface IDeleteOneRepository {
    deleteOne(id: string): Promise<void>
}