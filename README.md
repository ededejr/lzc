### lzc

a simple wrapper around [lz-string](https://www.npmjs.com/package/lz-string) for compressing and decompressing strings. this wrapper allows downstream consumers reliably use the same `lz-string` version across various components.

### usage

```ts
import lzc from '@ededejr/lzc';

const compressor = lzc('base64');

const input = 'a very long string';
const compressed = compressor.compress(input);
const decompressed = compressor.decompress(compressed);
```

### background

- [Lempel–Ziv–Welch](https://en.wikipedia.org/wiki/Lempel–Ziv–Welch)
- [lz-string](https://www.npmjs.com/package/lz-string)

### inspirations

- [json-url](https://github.com/masotime/json-url)
