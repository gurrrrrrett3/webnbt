export default class TagLongArray {
    public readonly name: string = 'TAG_Long_Array'
    public readonly type: number = 12
    public value: bigint[]

    constructor (value: bigint[]) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagLongArray {
        const length = buffer.readInt32BE(offset)
        const value: bigint[] = []
        for (let i = 0; i < length; i++) {
            value.push(buffer.readBigInt64BE(offset + 4 + i * 8))
        }
        return new TagLongArray(value)
    }

    public toBuffer (): Buffer {
        const length = this.value.length
        const buffer = Buffer.allocUnsafe(4 + length * 8)
        buffer.writeInt32BE(length, 0)
        for (let i = 0; i < length; i++) {
            buffer.writeBigInt64BE(this.value[i], 4 + i * 8)
        }
        return buffer
    }

    public toString (): string {
        return `${this.name}(${this.value})`
    }

    public toJSON (): bigint[] {
        return this.value
    }

    get size (): number {
        return 4 + this.value.length * 8
    }
}