🚀 Not Defteri (Full-Stack CRUD App)
Bu proje, temel CRUD işlemlerini (Oluşturma, Okuma, Güncelleme, Silme) içeren modern bir tam kapsamlı web uygulamasıdır.

🛠️ Kullanılan Teknolojiler
Backend (.NET 8 API)
Framework: ASP.NET Core Web API

Veritabanı: SQLite (Dosya tabanlı, kurulum gerektirmez)

ORM: Entity Framework Core (EF Core)

Özellikler: Dependency Injection, Migrations, CORS ayarları

Frontend (React)
Framework: React (Vite)

Stil: Tailwind CSS v4

HTTP İstemcisi: Axios

⚙️ Kurulum ve Çalıştırma
1. Backend Hazırlığı
Terminalde NotDefteri.Api klasörüne git:

Bash

# Bağımlılıkları yükle
dotnet restore

# Veritabanını oluştur (Migrations)
dotnet ef database update

# Projeyi çalıştır
dotnet run
Not: Backend varsayılan olarak https://localhost:7041 adresinde çalışmaktadır.

2. Frontend Hazırlığı
Terminalde not-defteri-ui klasörüne git:

Bash

# Bağımlılıkları yükle
npm install

# Tailwind PostCSS eklentisini yükle
npm install @tailwindcss/postcss

# Uygulamayı başlat
npm run dev
📝 Uygulama Özellikleri
Not Ekleme: Başlık ve içerik ile yeni not oluşturma.

Listeleme: Veritabanındaki tüm notları anlık görüntüleme.

Güncelleme: Mevcut notları düzenleme moduyla değiştirme.

Silme: Tek tıkla notları kalıcı olarak kaldırma.

🎯 Gelecek Hedefleri (Roadmap)
[ ] Uygulamayı Docker konteynerine taşımak.

[ ] Kubernetes ile orkestrasyon sağlamak.

[ ] Notlar içinde arama (Search) özelliği eklemek.
