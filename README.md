# IpOpEn

The IP-Geolocation adapter 🎧 for node.

## Install 😰

`npm i ipopen`

## Usage

### The callbacks ☎ way

```js
const ipopen = require('ipopen');

ipopen('157.37.165.132', (geo) => {
  console.log(geo);
})
```

### The promises 👏 way

```js
const ipopen = require('ipopen');

ipopen('157.37.165.132')
  .then(geo => console.log(geo));
```

### The async/await 💓 way

```js
const ipopen = require('ipopen');

(async () => {
  console.log(await ipopen('157.37.165.132'));
})()
```

---

### Lastly

**Uses https://github.com/maddhruv/open-ip internally**
