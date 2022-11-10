import {
  Base64Compressor,
  LZCompressor,
  URICompressor,
  Utf16Compressor,
} from './compressors';

/**
 * Create an instance of an LZCompressor for a particular encoding.
 * @param type - The encoding type to use.
 * @returns {LZCompressor} - The compressor instance.
 */
export default function lzc(type: 'base64' | 'utf16' | 'uri'): LZCompressor {
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

export { LZCompressor };
