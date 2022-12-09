---
title: Instalasi Node Package Manager
layout: ../layouts/MainLayout.astro
---
# Apa itu api ?

API (Application Programming Interface) web adalah sebuah teknologi yang memungkinkan aplikasi untuk saling berkomunikasi dan bertukar data melalui protokol standar seperti <b>HTTP</b>. API web menyediakan sebuah antarmuka bagi aplikasi yang memungkinkan mereka untuk mengakses fungsi dan data dari sistem lain, seperti sistem operasi, aplikasi, atau basis data.
# Apa itu http ?
HTTP (Hypertext Transfer Protocol) adalah protokol yang digunakan untuk mengirimkan data melalui internet. HTTP menyediakan berbagai metode yang disebut <b>HTTP methods</b> yang dapat digunakan oleh aplikasi untuk mengirim dan menerima data dari sistem lain.
</br>
## HTTP methods
<b>GET</b>: digunakan untuk mengambil data dari sebuah sumber. Misalnya, jika Anda menggunakan browser untuk mengakses sebuah halaman web, browser Anda akan mengirimkan permintaan GET ke server untuk mengambil halaman tersebut.</br>
<b>POST</b>: digunakan untuk mengirimkan data ke sebuah sumber. Misalnya, jika Anda mengisi form di sebuah halaman web dan mengirimkannya, browser Anda akan mengirimkan permintaan POST ke server untuk mengirimkan data form tersebut.</br>
<b>PUT</b>: digunakan untuk mengganti seluruh data di sebuah sumber dengan data baru.</br>
<b>PATCH</b>: digunakan untuk memperbarui sebagian data di sebuah sumber.</br>
<b>DELETE</b>: digunakan untuk menghapus data dari sebuah sumber.</br>
Dengan menggunakan metode HTTP ini, aplikasi dapat berkomunikasi dan bertukar data dengan sistem lain menggunakan API web. Misalnya, aplikasi dapat mengirim permintaan GET ke sebuah API web untuk mengambil data cuaca, atau mengirim permintaan POST ke API web lain untuk mengirim tweet melalui Twitter.

## Request dan Response
Permintaan (request) HTTP adalah sebuah permintaan yang dikirimkan oleh <b>aplikasi</b> ke server menggunakan salah satu metode HTTP seperti GET, POST, PUT, PATCH, atau DELETE. Permintaan ini akan mengandung informasi tentang metode HTTP yang digunakan, alamat URL tujuan, dan mungkin juga data lain yang dibutuhkan oleh server untuk memproses permintaan tersebut.

Respon (response) HTTP adalah sebuah balasan yang dikirimkan oleh <b>server</b> ke aplikasi setelah menerima permintaan HTTP. Balasan ini akan mengandung data yang diminta oleh aplikasi, informasi tentang status permintaan, dan mungkin juga informasi lain yang diperlukan oleh aplikasi.

Contoh sederhana: jika sebuah aplikasi mengirim permintaan GET ke sebuah API web untuk mengambil data cuaca, permintaan tersebut akan berisi informasi tentang metode HTTP yang digunakan (GET) dan alamat URL tujuan (seperti https://api.weather.com/forecast?city=New+York). Setelah menerima permintaan tersebut, server akan mengirimkan balasan yang berisi data cuaca untuk kota New York, serta informasi tentang status permintaan (misalnya, 200 OK untuk menandakan bahwa permintaan tersebut berhasil diproses oleh server). Aplikasi kemudian dapat menggunakan data cuaca yang diterima dari server untuk menampilkan informasi cuaca ke pengguna