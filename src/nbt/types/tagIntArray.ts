export default class TagIntArray {
    public readonly name: string = 'TAG_Int_Array'
    public readonly type: number = 11
    public value: number[]

    constructor (value: number[]) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagIntArray {
        const length = buffer.readInt32BE(offset)
        const value: number[] = []
        for (let i = 0; i < length; i++) {
            value.push(buffer.readInt32BE(offset + 4 + i * 4))
        }
        return new TagIntArray(value)
    }

    public toBuffer (): Buffer {
        const buffer = Buffer.allocUnsafe(4 + this.value.length * 4)
        buffer.writeInt32BE(this.value.length, 0)
        for (let i = 0; i < this.value.length; i++) {
            buffer.writeInt32BE(this.value[i], 4 + i * 4)
        }
        return buffer
    }

    public toString (): string {
        return `${this.name}(${this.value})`
    }

    public toJSON (): number[] {
        return this.value
    }

    get size (): number {
        return 4 + this.value.length * 4
    }
}