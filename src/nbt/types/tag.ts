import TagByte from "./tagByte";
import TagByteArray from "./tagByteArray";
import TagCompound from "./tagCompound";
import TagDouble from "./tagDouble";
import TagEnd from "./tagEnd";
import TagFloat from "./tagFloat";
import TagInt from "./tagInt";
import TagIntArray from "./tagIntArray";
import TagList from "./tagList";
import TagLong from "./tagLong";
import TagLongArray from "./tagLongArray";
import TagShort from "./tagShort";
import TagString from "./tagString";

export default function TagFromBuffer(buffer: Buffer, offset: number = 0) {
    const type = buffer.readInt8(offset);

    console.log(`Loading tag of type ${type} at offset ${offset}`);

    switch (type) {
      case 0:
        return new TagEnd();
      case 1:
        return TagByte.fromBuffer(buffer, offset + 1);
      case 2:
        return TagShort.fromBuffer(buffer, offset + 1);
      case 3:
        return TagInt.fromBuffer(buffer, offset + 1);
      case 4:
        return TagLong.fromBuffer(buffer, offset + 1);
      case 5:
        return TagFloat.fromBuffer(buffer, offset + 1);
      case 6:
        return TagDouble.fromBuffer(buffer, offset + 1);
      case 7:
        return TagByteArray.fromBuffer(buffer, offset + 1);
      case 8:
        return TagString.fromBuffer(buffer, offset + 1);
      case 9:
        return TagList.fromBuffer(buffer, offset + 1);
      case 10:
        return TagCompound.fromBuffer(buffer, offset + 1);
      case 11:
        return TagIntArray.fromBuffer(buffer, offset + 1);
      case 12:
        return TagLongArray.fromBuffer(buffer, offset + 1);
      default:
        throw new Error(`Unknown tag type: ${type}`);
    }
  }

export type Tag = TagEnd | TagByte | TagShort | TagInt | TagLong | TagFloat | TagDouble | TagByteArray | TagString | TagList | TagCompound | TagIntArray | TagLongArray;