import lz from 'lz-string';
import {
  Base64Compressor,
  URICompressor,
  Utf16Compressor,
} from '../compressors';

jest.mock('lz-string', () => {
  const actual = jest.requireActual('lz-string');
  return {
    compressToBase64: jest.fn().mockImplementation(actual.compressToBase64),
    compressToEncodedURIComponent: jest
      .fn()
      .mockImplementation(actual.compressToEncodedURIComponent),
    compressToUTF16: jest.fn().mockImplementation(actual.compressToUTF16),
    decompressFromBase64: jest
      .fn()
      .mockImplementation(actual.decompressFromBase64),
    decompressFromEncodedURIComponent: jest
      .fn()
      .mockImplementation(actual.decompressFromEncodedURIComponent),
    decompressFromUTF16: jest
      .fn()
      .mockImplementation(actual.decompressFromUTF16),
  };
});

describe('compressors', () => {
  test('should be defined', () => {
    expect(Base64Compressor).toBeDefined();
    expect(URICompressor).toBeDefined();
    expect(Utf16Compressor).toBeDefined();
  });

  describe('Base64Compressor', () => {
    const compressor = new Base64Compressor();

    test('has compress method', () => {
      expect(compressor.compress).toBeDefined();
      expect(typeof compressor.compress).toBe('function');
    });

    test('has decompress method', () => {
      expect(compressor.decompress).toBeDefined();
      expect(typeof compressor.decompress).toBe('function');
    });

    test('should compress and decompress a string', () => {
      const str = 'Hello World';
      const compressed = compressor.compress(str);
      const decompressed = compressor.decompress(compressed);
      expect(compressed).not.toBe(str);
      expect(decompressed).toBe(str);
      expect(lz.compressToBase64).toHaveBeenNthCalledWith(1, str);
      expect(lz.decompressFromBase64).toHaveBeenNthCalledWith(1, compressed);
    });
  });

  describe('URICompressor', () => {
    const compressor = new URICompressor();

    test('has compress method', () => {
      expect(compressor.compress).toBeDefined();
      expect(typeof compressor.compress).toBe('function');
    });

    test('has decompress method', () => {
      expect(compressor.decompress).toBeDefined();
      expect(typeof compressor.decompress).toBe('function');
    });

    test('should compress and decompress a string', () => {
      const str = 'Hello World';
      const compressed = compressor.compress(str);
      const decompressed = compressor.decompress(compressed);
      expect(compressed).not.toBe(str);
      expect(decompressed).toBe(str);
      expect(lz.compressToEncodedURIComponent).toHaveBeenNthCalledWith(1, str);
      expect(lz.decompressFromEncodedURIComponent).toHaveBeenNthCalledWith(
        1,
        compressed
      );
    });
  });

  describe('Utf16Compressor', () => {
    const compressor = new Utf16Compressor();

    test('has compress method', () => {
      expect(compressor.compress).toBeDefined();
      expect(typeof compressor.compress).toBe('function');
    });

    test('has decompress method', () => {
      expect(compressor.decompress).toBeDefined();
      expect(typeof compressor.decompress).toBe('function');
    });

    test('should compress and decompress a string', () => {
      const str = 'Hello World';
      const compressed = compressor.compress(str);
      const decompressed = compressor.decompress(compressed);
      expect(compressed).not.toBe(str);
      expect(decompressed).toBe(str);
      expect(lz.compressToUTF16).toHaveBeenNthCalledWith(1, str);
      expect(lz.decompressFromUTF16).toHaveBeenNthCalledWith(1, compressed);
    });
  });
});
