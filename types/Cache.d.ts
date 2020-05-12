export declare class Cache {
    readonly maxSize: number;
    readonly ttl: number;
    private cache;
    private expiredTime;
    constructor(maxSize?: number, ttl?: number);
    get length(): number;
    has(key: string): boolean;
    [Symbol.iterator](): Generator;
    keys(): IterableIterator<string>;
    get full(): boolean;
    get(key: string): unknown;
    add(key: string, value: unknown, ttl?: number): void;
    set(key: string, value: unknown, ttl?: number): void;
    delete(key: string): boolean;
    evict(): number;
    pop(): [string, unknown] | [];
    private deleteExpired;
    expired(key: string, expiredOn?: number): boolean;
}
