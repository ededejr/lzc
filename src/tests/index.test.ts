import LZC from '../';
import {
  Base64Compressor,
  URICompressor,
  Utf16Compressor,
} from '../compressors';

describe('LZC', () => {
  test('should be defined', () => {
    expect(LZC).toBeDefined();
  });

  test('contains a create method', () => {
    expect(LZC.create).toBeDefined();
    expect(typeof LZC.create).toBe('function');
  });

  test('create method should return a compressor', () => {
    const compressor = LZC.create('base64');
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
      LZC.create('unknown');
    }).toThrow();
  });

  test('creates correct compressor type', () => {
    expect(LZC.create('base64')).toBeInstanceOf(Base64Compressor);
    expect(LZC.create('utf16')).toBeInstanceOf(Utf16Compressor);
    expect(LZC.create('uri')).toBeInstanceOf(URICompressor);
  });
});
