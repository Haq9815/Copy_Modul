---
title: Dasar Dasar Koa Js
layout: ../layouts/MainLayout.astro
---
## Koa Js
Koa adalah sebuah framework web untuk Node.js. Framework ini dirancang untuk menjadi fondasi yang lebih kecil, ekspresif, dan kuat untuk aplikasi web dan API. Koa menggunakan paradigma middleware untuk memproses <b>request</b> dan mengirimkan <b>response </b>, yang memungkinkan pengembang untuk dengan mudah menambahkan fitur dan memodifikasi comportment aplikasi.

## Context
ctx, atau context, adalah sebuah objek yang digunakan oleh Koa untuk menyimpan informasi tentang request yang sedang diproses dan response yang akan dikirim kembali ke client. Objek ini merupakan argumen yang disediakan untuk setiap fungsi middleware yang dipanggil oleh aplikasi Koa.

Objek ctx menyimpan informasi seperti metode request, header request, parameter query, dan sebagainya. Selain itu, objek ini juga menyediakan beberapa metode untuk memodifikasi response sebelum dikirim ke client, seperti mengatur status code dan body response.

## Contoh penggunaan ctx
```js
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  // Mengambil metode request dari ctx
  const method = ctx.method;

  // Mengambil query string dari ctx
  const query = ctx.query;

  // Mengatur status code response menjadi 200
  ctx.status = 200;

  // Mengatur body response menjadi string "Hello World"
  ctx.body = 'Hello World';
});

app.listen(3000);
```
<b>Kode</b> di atas merupakan contoh dari sebuah fungsi middleware yang ditambahkan ke dalam aplikasi Koa. Fungsi ini akan dipanggil oleh aplikasi Koa setiap kali terdapat sebuah request yang dibuat ke aplikasi.
</br> <b>Fungsi</b> middleware ini akan melakukan beberapa tugas:</br>
1.Mengambil metode request dari objek ctx dan menyimpannya dalam variabel method.
2.Mengambil query string dari objek ctx dan menyimpannya dalam variabel query.</br>
3.Mengatur status code response menjadi 200 dengan mengatur properti status dari objek ctx menjadi 200.</br>
4.Mengatur body response menjadi string "Hello World" dengan mengatur properti body dari objek ctx menjadi string "Hello World".
</br><b>Setelah</b> fungsi middleware ini dipanggil, informasi yang disimpan dalam method, query, status, dan body akan disertakan dalam response yang dikirim ke client. 