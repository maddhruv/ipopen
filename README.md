# IpOpEn

The IP-Geolocation adapter 🎧 for node.

## Install

`npm i ipopen`

or

`yarn add ipopen`

## Usage

### The callbacks ☎ way

```js
const ipopen = require("ipopen");

ipopen("157.37.165.132", (geo, err) => {
  if (err) throw err;
  console.log(geo);
});
```

### The promises 👏 way

```js
const ipopen = require("ipopen");

ipopen("157.37.165.132")
  .then(geo => console.log(geo))
  .catch(err => console.error(err));
```

### The async/await 💓 way

```js
const ipopen = require("ipopen");

(async () => {
  try {
    console.log(await ipopen("157.37.165.132"));
  } catch (err) {
    console.error(err);
  }
})();
```

---

### Lastly

**Uses https://github.com/maddhruv/open-ip internally**
