import {
  Base64Compressor,
  LZCompressor,
  URICompressor,
  Utf16Compressor,
} from './compressors';

export default class LZC {
  static create(type: 'base64' | 'utf16' | 'uri'): LZCompressor {
    switch (type) {
      case 'base64':
        return new Base64Compressor();
      case 'utf16':
        return new Utf16Compressor();
      case 'uri':
        return new URICompressor();
      default:
        throw new Error('Unknown compressor type');
    }
  }
}

export { LZCompressor };
