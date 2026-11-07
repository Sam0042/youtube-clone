# YouTube Clone

## 1. Deskripsi Project

Project ini merupakan cloning dari homepage **YouTube**. Tujuan project ini adalah mereplikasi tampilan utama YouTube (homepage) serta mengimplementasikan integrasi frontend dan backend melalui REST API bentuk sederhana.

## 2. Teknologi yang Digunakan

**Frontend:**

- React.js – Membangun antarmuka menggunakan component-based architecture.
- Vite – Development server dan build tool.
- Tailwind CSS – Styling dan responsive layout.
- Lucide React – Ikon antarmuka.
- Fetch API – Menghubungkan frontend dan backend.

**Backend:**

- Node.js – JavaScript runtime.
- Express.js – Membangun REST API.
- CORS – Mengizinkan komunikasi antara frontend dan backend.
- Nodemon – Mempermudah proses development backend.

## 3. Pendekatan Pengembangan (Approach)

Pengembangan project dilakukan secara bertahap dengan membagi pekerjaan menjadi beberapa bagian:

1. **Pengembangan Backend:** Membuat REST API menggunakan Express.js dengan endpoint GET untuk mengambil daftar video dan POST untuk menambahkan video baru.
2. **Pengembangan Frontend:** Membuat ulang tampilan halaman utama YouTube menggunakan React dan Tailwind CSS dengan membagi UI menjadi beberapa komponen agar lebih mudah dikelola.
3. **Integrasi API:** Menghubungkan frontend dengan backend menggunakan Fetch API agar data dapat ditampilkan dan dikirim melalui antarmuka website.
4. **Pengelolaan Data:** Menggunakan in-memory data sebagai penyimpanan sementara tanpa database karena kebutuhan project berfokus pada implementasi dasar GET dan POST.
5. **Validasi Data:** Menambahkan validasi di sisi backend untuk memastikan data yang dikirim melalui form sesuai dengan format yang diharapkan.
6. **Pengujian:** Menguji setiap endpoint serta memastikan integrasi frontend dan backend berjalan sesuai kebutuhan.

## 4. Keputusan Teknis (Key Decisions)

Beberapa keputusan teknis yang diterapkan selama pengembangan:

- **In-memory data:** Menggunakan array JavaScript sebagai penyimpanan sementara untuk menghindari kompleksitas database karena challenge hanya membutuhkan implementasi dasar GET dan POST sederhana.
- **Validasi di side backend:** Validasi dilakukan di backend agar data yang masuk tetap diperiksa meskipun request tidak berasal dari form frontend (juga untuk memudahkan testing response).
- **Pemisahan frontend dan backend:** Memisahkan React dan Express ke dalam folder berbeda agar struktur project lebih terorganisir dan masing-masing dapat dijalankan secara independen.
- **REST API:** Menggunakan endpoint GET dan POST untuk memisahkan proses pengambilan dan penambahan data.

**Tradeoff dan keterbatasan:**

Penggunaan in-memory data membuat implementasi lebih sederhana, tetapi data tidak bersifat permanen. Data yang ditambahkan akan hilang ketika server melakukan restart. Pendekatan ini cocok untuk kebutuhan demonstrasi APi sederhana seperti challenge ini.

## 5. Dokumentasi API

Base URL lokal:

`http://localhost:5000`

### GET /api/videos

Mengambil daftar video yang tersedia.

**Request:**

```http
GET /api/videos
```

**Response – 200 OK:**

```json
{
    "success": true,
    "count": 6,
    "data": [
        {
            "id": 1,
            "title": "Learn React JS in 30 Minutes",
            "channel": "Programming with Mosh",
            "channelAvatar": "https://i.pravatar.cc/150?img=12",
            "thumbnail": "https://i.ytimg.com/vi/SqcY0GlETPk/hqdefault.jpg",
            "views": "120K views",
            "uploadedAt": "2 days ago",
            "duration": "30:15",
            "category": "Programming"
        },
        {
            "id": 2,
            "title": "JavaScript Full Course for Beginners",
            "channel": "freeCodeCamp.org",
            "channelAvatar": "https://i.pravatar.cc/150?img=13",
            "thumbnail": "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
            "views": "2.5M views",
            "uploadedAt": "1 year ago",
            "duration": "3:26:42",
            "category": "Programming"
        },
        {
            "id": 3,
            "title": "Building My Dream Setup 2026",
            "channel": "TechZone",
            "channelAvatar": "https://i.pravatar.cc/150?img=14",
            "thumbnail": "https://i.ytimg.com/vi/4xDzrJKXOOY/hqdefault.jpg",
            "views": "85K views",
            "uploadedAt": "5 days ago",
            "duration": "18:42",
            "category": "Technology"
        },
        {
            "id": 4,
            "title": "Relaxing Music for Studying",
            "channel": "Bhai Tutorial",
            "channelAvatar": "https://i.pravatar.cc/150?img=15",
            "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ283kscUqr3q3yAJsyCQL-2E80j-W2ugxVTVXscY4ftECSKy0voigY5rE&s=10",
            "views": "15M views",
            "uploadedAt": "3 months ago",
            "duration": "34:19",
            "category": "Tutorial"
        },
        {
            "id": 5,
            "title": "Top 10 Most Beautiful Places in the World",
            "channel": "Travel World",
            "channelAvatar": "https://i.pravatar.cc/150?img=16",
            "thumbnail": "https://i.ytimg.com/vi/ScMzIvxBSi4/hqdefault.jpg",
            "views": "450K views",
            "uploadedAt": "1 week ago",
            "duration": "12:35",
            "category": "Travel"
        },
        {
            "id": 6,
            "title": "How I Would Learn Coding If I Started Again",
            "channel": "Fireship",
            "channelAvatar": "https://i.pravatar.cc/150?img=17",
            "thumbnail": "https://i.ytimg.com/vi/NtfbWkxJTHw/hqdefault.jpg",
            "views": "320K views",
            "uploadedAt": "3 weeks ago",
            "duration": "10:20",
            "category": "Programming"
        }
    ]
}
```

### POST /api/videos

Menambahkan video baru ke dalam daftar video.

**Request:**

```http
POST /api/videos
Content-Type: application/json
```

**Request Body:**

```json
{
  "title": "New Video",
  "channel": "Example Channel",
  "channelAvatar": "https://example.com/avatar.jpg",
  "thumbnail": "https://example.com/thumbnail.jpg",
  "views": "15K",
  "uploadedAt": "2 days ago",
  "duration": "10:30",
  "category": "Technology"
}
```

**Response – 201 Created:**

```json
{
    "success": true,
    "message": "Video created successfully.",
    "data": {
        "id": 1794059716892,
        "title": "New Video",
        "channel": "Example Channel",
        "channelAvatar": "https://example.com/avatar.jpg",
        "thumbnail": "https://example.com/thumbnail.jpg",
        "views": "15K",
        "uploadedAt": "2 days ago",
        "duration": "10:30",
        "category": "Technology"
    }
}
```

**Server-side Validation:**

Backend melakukan validasi terhadap seluruh data yang dikirim melalui endpoint POST:

- Semua field wajib diisi dan harus berupa string yang tidak kosong.
- `channelAvatar` dan `thumbnail` harus berupa URL valid dengan protokol HTTP atau HTTPS.
- `views` harus berupa string, misalnya `"30k views"` atau `"1.2M views"`.
- `duration` harus menggunakan format `MM:SS` atau `HH:MM:SS`, dengan tanda titik dua (`:`) sebagai pemisah. Contoh: `"12:30"` atau `"01:05:30"`.
- `category` harus berupa string dan tidak boleh mengandung angka. Contoh: `"Gaming"` valid, sedangkan `"Gaming123"` tidak valid.

**Response – 400 Bad Request:**

Jika terdapat data yang tidak memenuhi aturan validasi, server mengembalikan response berikut:

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": {
    "category": "category must not contain numbers."
  }
}
```


## 6. Cara Menjalankan Project Secara Lokal

**Persyaratan:**

- Node.js dan npm sudah terinstal.
- Git (opsional, untuk cloning repository).

**Langkah 1 – Clone repository**

```bash
git clone https://github.com/Sam0042/youtube-clone.git
cd youtube-clone
```

**Langkah 2 – Jalankan Backend**

Buka terminal pertama:

```bash
cd backend
npm install
npm run dev
```

Backend akan berjalan di:

`http://localhost:5000`

**Langkah 3 – Jalankan Frontend**

Buka terminal kedua:

```bash
cd frontend
npm install
npm run dev
```

Frontend akan berjalan di alamat lokal yang ditampilkan oleh Vite, biasanya:

`http://localhost:5173`

**Langkah 4 – Buka Website**

Buka alamat frontend melalui browser. Pastikan backend juga berjalan agar data video dapat diambil dan dikirim melalui API.

## 7. Cara Melihat Loading State

Setelah project berhasil dijalankan, kamu dapat melihat loading state dengan mengikuti langkah-langkah berikut:

Buka website melalui browser.

Buka Inspect Element dengan menekan F12 atau klik kanan lalu pilih Inspect.

Pilih tab Network.

Cari pengaturan throttling jaringan (default-nya biasanya No throttling).

Ubah pengaturan tersebut menjadi 3G (atau kalau terlalu lambat boleh coba Slow 4G).

Tekan Ctrl + R untuk me-refresh halaman.

Dengan koneksi yang diperlambat, proses pengambilan data dari API akan membutuhkan waktu lebih lama sehingga loading state (Skeleton loading) dapat terlihat sebelum data berhasil ditampilkan.
