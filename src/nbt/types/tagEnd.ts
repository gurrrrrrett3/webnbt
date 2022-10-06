export default class TagEnd {
    get name () {
        return 'TAG_End'
    }

    get type () {
        return 0
    }

    get value (): null {
        return null
    }

    toBuffer () {
        return Buffer.allocUnsafe(0)
    }

    get size () {
        return 1
    }

}