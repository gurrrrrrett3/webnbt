import TagFromBuffer, { Tag } from "./tag"
import TagEnd from "./tagEnd"

export default class TagCompound {
    public readonly name: string = 'TAG_Compound'
    public readonly type: number = 10
    public value: Record<string, Tag>

    constructor (value: Record<string, Tag> = {}) {
        this.value = value
    }

    public static fromBuffer (buffer: Buffer, offset: number = 0): TagCompound {
        const value: Record<string, Tag> = {}
        let i = offset
        let tag: Tag
        while ((tag = TagFromBuffer(buffer, i)).type !== 0) {
            value[tag.name] = tag
            i += tag.size
        }
        return new TagCompound(value)
    }

    public toBuffer (): Buffer {
        const buffers: Buffer[] = []
        for (const key in this.value) {
            const tag = this.value[key]
            buffers.push(tag.toBuffer())
        }
        buffers.push(new TagEnd().toBuffer())
        return Buffer.concat(buffers)
    }

    public toString (): string {
        return `${this.name}(${Object.keys(this.value).length})`
    }

    public toJSON (): Record<string, Tag> {
        return this.value
    }

    get size (): number {
        return Object.values(this.value).reduce((size, tag) => size + tag.size, 1)
    }
}