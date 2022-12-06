---
title: Generics and Utility types
layout: ../layouts/MainLayout.astro
---

## Node js 
Sebagai runtime JavaScript berbasis peristiwa asinkron, Node.js dirancang untuk membangun aplikasi jaringan yang dapat diskalakan. Dalam contoh "hello world" berikut, banyak koneksi dapat ditangani secara bersamaan. Pada setiap koneksi, callback diaktifkan, tetapi jika tidak ada pekerjaan yang harus diselesaikan, Node.js akan tidur.

## Instalasi Node js 
[Download Node js](https://nodejs.org/en/)

## Contoh Program sederhana

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
