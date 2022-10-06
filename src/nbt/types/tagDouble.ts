export default class TagDouble {
    public readonly name: string = 'TAG_Double'
    public readonly type: number = 6
    public value: number

    constructor (value: number) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagDouble {
        return new TagDouble(buffer.readDoubleBE(offset))
    }

    public toBuffer (): Buffer {
        const buffer = Buffer.allocUnsafe(8)
        buffer.writeDoubleBE(this.value, 0)
        return buffer
    }

    public toString (): string {
        return `${this.name}(${this.value})`
    }

    public toJSON (): number {
        return this.value
    }

    get size (): number {
        return 8
    }
}