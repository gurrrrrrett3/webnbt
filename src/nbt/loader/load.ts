import TagCompound from "../types/tagCompound";

export default class NBTLoader {
    public static loadFromBuffer (buffer: Buffer): TagCompound {
        const tag = TagCompound.fromBuffer(buffer)
        if (tag.size !== buffer.length) {
            throw new Error('Invalid NBT data')
        }
        return tag
    }
}