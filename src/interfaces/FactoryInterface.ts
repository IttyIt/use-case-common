export interface FactoryInterface<T> {
    createInstance(...args: any): T;
}
