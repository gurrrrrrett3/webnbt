export default class TagShort {
    public readonly name: string = 'TAG_Short'
    public readonly type: number = 2
    public value: number

    constructor (value: number) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagShort {
        return new TagShort(buffer.readInt16BE(offset))
    }

    public toBuffer (): Buffer {
        const buffer = Buffer.allocUnsafe(2)
        buffer.writeInt16BE(this.value, 0)
        return buffer
    }

    public toString (): string {
        return `${this.name}(${this.value})`
    }

    public toJSON (): number {
        return this.value
    }

    get size (): number {
        return 2
    }
}