export default class TagFloat {
    public readonly name: string = 'TAG_Float'
    public readonly type: number = 5
    public value: number

    constructor (value: number) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagFloat {
        return new TagFloat(buffer.readFloatBE(offset))
    }

    public toBuffer (): Buffer {
        const buffer = Buffer.allocUnsafe(4)
        buffer.writeFloatBE(this.value, 0)
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