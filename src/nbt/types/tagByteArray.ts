export default class TagByteArray {
    public readonly name: string = 'TAG_Byte_Array'
    public readonly type: number = 7
    public value: number[]

    constructor (value: number[]) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagByteArray {
        const length = buffer.readInt32BE(offset)
        const value: number[] = []
        for (let i = 0; i < length; i++) {
            value.push(buffer.readInt8(offset + 4 + i))
        }
        return new TagByteArray(value)
    }
 
    public toBuffer (): Buffer {
        const buffer = Buffer.allocUnsafe(4 + this.value.length)
        buffer.writeInt32BE(this.value.length, 0)
        for (let i = 0; i < this.value.length; i++) {
            buffer.writeInt8(this.value[i], 4 + i)
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
        return 4 + this.value.length
    }
}