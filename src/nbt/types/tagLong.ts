export default class TagLong {
    public readonly name: string = 'TAG_Long'
    public readonly type: number = 4
    public value: bigint

    constructor (value: bigint) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagLong {
        return new TagLong(buffer.readBigInt64BE(offset))
    }

    public toBuffer (): Buffer {
        const buffer = Buffer.allocUnsafe(8)
        buffer.writeBigInt64BE(this.value, 0)
        return buffer
    }

    public toString (): string {
        return `${this.name}(${this.value})`
    }

    public toJSON (): bigint {
        return this.value
    }

    get size (): number {
        return 8
    }
}