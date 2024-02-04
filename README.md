# smart-ts

Convert between traditional `YYYY-MM-DD` timestamps and smart `WWyu` timestamps.

## Usage

```js
import { transform } from "smart-ts";

transform("2023-01-01") => "0d7"
transform("2023-01-28") => "4d6"
transform("2023-12-25") => "52d1"
transform("2024-01-01") => "1e1"
transform("0d7") => "2023-01-01"
transform("4d6") => "2023-01-28"
transform("52d1") => "2023-12-25"
transform("1e1") => "2024-01-01"
```
