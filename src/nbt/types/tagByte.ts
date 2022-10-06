export default class TagByte {
    public readonly name: string = 'TAG_Byte'
    public readonly type: number = 1
    public value: number

    constructor (value: number) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagByte {
        return new TagByte(buffer.readInt8(offset))
    }

    public toBuffer (): Buffer {
        const buffer = Buffer.allocUnsafe(1)
        buffer.writeInt8(this.value, 0)
        return buffer
    }

    public toString (): string {
        return `${this.name}(${this.value})`
    }

    public toJSON (): number {
        return this.value
    }

    get size (): number {
        return 1
    }
}