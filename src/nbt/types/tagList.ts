import TagFromBuffer, { Tag } from "./tag"

export default class TagList {
    public readonly name: string = 'TAG_List'
    public readonly type: number = 9
    public value: Tag[]

    constructor (value: Tag[]) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagList {
        const length = buffer.readUInt32BE(offset + 1)
        const value: Tag[] = []
        let _offset = offset + 5
        for (let i = 0; i < length; i++) {
            const tag = TagFromBuffer(buffer, _offset)
            value.push(tag)
            _offset += tag.size
        }
        return new TagList(value)
    }

    public toBuffer (): Buffer {
        const type = this.value.length > 0 ? this.value[0].type : 0
        const buffer = Buffer.allocUnsafe(5)
        buffer.writeUInt8(type, 0)
        buffer.writeUInt32BE(this.value.length, 1)
        return Buffer.concat([buffer, ...this.value.map(tag => tag.toBuffer())])
    }

    public toString (): string {
        return `${this.name}(${this.value.map(tag => tag.toString()).join(', ')})`
    }

    public toJSON (): Tag[] {
        return this.value
    }

    get size (): number {
        return 5 + this.value.reduce((size, tag) => size + tag.size, 0)
    }
}