# 🛒 Next.js + Redux E-Commerce Application

Bu proje, modern bir e-ticaret uygulaması oluşturmak için **Next.js**, **Redux** ve **Tailwind CSS** kullanılarak geliştirilmiştir. Kullanıcılar ürünleri görüntüleyebilir, detaylarını inceleyebilir ve sepetlerine ekleyerek miktarlarını yönetebilir.

## Özellikler

- **Ürün Listesi**: Tüm ürünlerin modern bir grid düzeninde listelenmesi.
- **Ürün Detay Sayfası**: Ürün bilgileri ve sepete ekleme seçeneği.
- **Sepet Yönetimi**:
  - Ürün ekleme.
  - Ürün miktarını artırma ve azaltma.
  - Ürünleri kaldırma.
- **Responsive Tasarım**: Tüm cihazlarda uyumlu ve kullanıcı dostu.
- **Redux ile Durum Yönetimi**: Uygulama durumunun kolay yönetimi için Redux kullanıldı.

## Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/kullanici-adiniz/ecommerce-app.git
   cd ecommerce-app
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. Çevre değişkenlerini ayarlayın:
   Proje kök dizininde `.env.local` dosyası oluşturun ve aşağıdaki değişkeni ekleyin:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Uygulamayı çalıştırın:
   ```bash
   npm run dev
   ```

   Uygulama şu adreste çalışacaktır: [http://localhost:3000](http://localhost:3000)

## Kullanım

- **Ana Sayfa**: Öne çıkan ürünlerin listelendiği ve ürünlere hızlı erişim sağlanan bir arayüz.
- **Ürünler Sayfası**: Tüm ürünlerin modern bir grid düzeninde listelendiği sayfa.
- **Ürün Detay Sayfası**: Seçilen ürün hakkında detaylı bilgi ve sepete ekleme butonu.
- **Sepet Sayfası**: Eklenen ürünlerin miktarlarını artırıp azaltma ve ürünleri kaldırma seçenekleri.

## Redux İşlevleri

### `addToCart`
Sepete ürün ekler.
```typescript
export const addToCart = (product: any) => ({
  type: "cart/addToCart",
  payload: product,
});
```

### `increaseQuantity`
Belirli bir ürünün miktarını artırır.
```typescript
export const increaseQuantity = (productId: number) => ({
  type: "cart/increaseQuantity",
  payload: productId,
});
```

### `decreaseQuantity`
Belirli bir ürünün miktarını azaltır. Miktar sıfır olduğunda, ürün sepetten kaldırılır.
```typescript
export const decreaseQuantity = (productId: number) => ({
  type: "cart/decreaseQuantity",
  payload: productId,
});
```

## Katkıda Bulunma

1. Bu projeyi **fork**'layın.
2. Yeni bir **branch** oluşturun: `git checkout -b yeni-ozellik`.
3. Değişikliklerinizi yapın ve commit edin: `git commit -m "Yeni özellik ekledim"`.
4. **Pull request** gönderin.

## Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır.
