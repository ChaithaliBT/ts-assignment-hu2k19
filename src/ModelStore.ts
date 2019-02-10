export class ModelStore<M extends Model> {
    private data: M[];

    getById(id: number): M {
        return this.filter(m => m.id === id)[0];
    }

    filter(predicate: (obj: M) => boolean): M[] {
        return this.data.filter(predicate);
    }

    add(obj: M): void {
        this.data.push(obj);
    }

    remove(id: number): void {
        this.data = this.data.filter(m => m.id !== id);
    }

    update(obj: M): void {
        this.data = this.data.map(m => obj.id === m.id ? obj : m);
    }

}
