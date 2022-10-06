import TagCompound from './types/tagCompound';

export default class NBT {

    public data: Buffer

    constructor (data: Buffer) {
        this.data = data
    }

    public static parse (data: Buffer): TagCompound {
        return TagCompound.fromBuffer(data)
    }   

}