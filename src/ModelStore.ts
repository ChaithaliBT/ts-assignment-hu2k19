export interface ModelStore<M extends Model> {
    getById(id: number): M;

    filter(predicate: (obj: M) => boolean): M[];

    add(obj: M): void;

    remove(id: number): void;

    update(obj: M): void;

}
