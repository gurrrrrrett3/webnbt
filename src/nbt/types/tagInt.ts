export default class TagInt {
    public readonly name: string = 'TAG_Int'
    public readonly type: number = 3
    public value: number

    constructor (value: number) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagInt {
        return new TagInt(buffer.readInt32BE(offset))
    }

    public toBuffer (): Buffer {
        const buffer = Buffer.allocUnsafe(4)
        buffer.writeInt32BE(this.value, 0)
        return buffer
    }

    public toString (): string {
        return `${this.name}(${this.value})`
    }

    public toJSON (): number {
        return this.value
    }

    get size (): number {
        return 4
    }
}