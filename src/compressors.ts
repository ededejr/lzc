import lz from 'lz-string';

export abstract class LZCompressor {
  abstract compress(data: string): string;
  abstract decompress(data: string): string | null;
}

export class Base64Compressor extends LZCompressor {
  compress(data: string) {
    return lz.compressToBase64(data);
  }
  decompress(data: string) {
    return lz.decompressFromBase64(data);
  }
}

export class URICompressor extends LZCompressor {
  compress(data: string) {
    return lz.compressToEncodedURIComponent(data);
  }
  decompress(data: string) {
    return lz.decompressFromEncodedURIComponent(data);
  }
}

export class Utf16Compressor extends LZCompressor {
  compress(data: string) {
    return lz.compressToUTF16(data);
  }
  decompress(data: string) {
    return lz.decompressFromUTF16(data);
  }
}
