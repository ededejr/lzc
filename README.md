### lzc

a simple wrapper around [lz-string](https://www.npmjs.com/package/lz-string) for compressing and decompressing strings. this wrapper allows downstream consumers reliably use the same `lz-string` version across various components.

learn more ↠ [Lempel–Ziv–Welch](https://en.wikipedia.org/wiki/Lempel–Ziv–Welch)

### usage

```ts
import LZC from '@ededejr/lzc';

const compressor = LZC.create('base64');

const input = 'a very long string';
const compressed = compressor.compress(input);
const decompressed = compressor.decompress(compressed);
```

#### inspirations

- [json-url](https://github.com/masotime/json-url)
