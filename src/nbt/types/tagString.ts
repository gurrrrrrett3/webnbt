export default class TagString {
    public readonly name: string = 'TAG_String'
    public readonly type: number = 8
    public value: string

    constructor (value: string) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagString {
        const length = buffer.readUInt16BE(offset)
        return new TagString(buffer.toString('utf8', offset + 2, offset + 2 + length))
    }

    public toBuffer (): Buffer {
        const length = Buffer.allocUnsafe(2)
        length.writeUInt16BE(this.value.length, 0)
        return Buffer.concat([length, Buffer.from(this.value, 'utf8')])
    }

    public toString (): string {
        return `${this.name}(${this.value})`
    }

    public toJSON (): string {
        return this.value
    }

    get size (): number {
        return 2 + this.value.length
    }
}