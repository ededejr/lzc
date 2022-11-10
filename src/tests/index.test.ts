import lzc from '../';
import {
  Base64Compressor,
  URICompressor,
  Utf16Compressor,
} from '../compressors';

describe('lzc', () => {
  test('should be defined', () => {
    expect(lzc).toBeDefined();
  });

  test('contains a create method', () => {
    expect(lzc).toBeDefined();
    expect(typeof lzc).toBe('function');
  });

  test('create method should return a compressor', () => {
    const compressor = lzc('base64');
    expect(compressor).toBeDefined();
    expect(compressor.compress).toBeDefined();
    expect(compressor.decompress).toBeDefined();
    expect(typeof compressor.compress).toBe('function');
    expect(typeof compressor.decompress).toBe('function');
  });

  test('create method should throw an error for unknown compressor type', () => {
    expect(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - testing incompatible type
      lzc('unknown');
    }).toThrow();
  });

  test('creates correct compressor type', () => {
    expect(lzc('base64')).toBeInstanceOf(Base64Compressor);
    expect(lzc('utf16')).toBeInstanceOf(Utf16Compressor);
    expect(lzc('uri')).toBeInstanceOf(URICompressor);
  });
});
