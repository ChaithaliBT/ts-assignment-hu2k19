export class ModelStore<M extends Model> {
    private data: M[];

    getById(id: number): M {
    }

    filter(predicate: (obj: M) => boolean): M[] {
    }

    add(obj: M): void {
    }

    remove(id: number): void {
    }

    update(obj: M): void {
    }

}
