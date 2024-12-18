# 🛒 Next.js + Redux E-Commerce Application

Bu proje, modern bir e-ticaret uygulaması oluşturmak için **Next.js**, **Redux** ve **Tailwind CSS** kullanılarak geliştirilmiştir. Kullanıcılar ürünleri görüntüleyebilir, detaylarını inceleyebilir ve sepetlerine ekleyerek miktarlarını yönetebilir.

## Özellikler

- **Ürün Listesi**: Tüm ürünlerin modern bir grid düzeninde listelenmesi.
- **Ürün Detay Sayfası**: Ürün bilgileri ve sepete ekleme seçeneği.
- **Sepet Yönetimi**:
  - Ürün ekleme.
  - Ürün miktarını artırma ve azaltma.
  - Ürünleri kaldırma.
  - Sepeti tamamen temizleme.
- **Responsive Tasarım**: Tüm cihazlarda uyumlu ve kullanıcı dostu.
- **Redux ile Durum Yönetimi**: Uygulama durumunun kolay yönetimi için Redux kullanıldı.

## Kurulum

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/salihkaankoc/ecommerce-redux-typescript.git
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
- **Sepet Sayfası**: Eklenen ürünlerin miktarlarını artırıp azaltma, ürünleri kaldırma ve sepeti temizleme seçenekleri.

## Redux İşlevleri

### `addToCart`
Sepete ürün ekler. Eğer ürün zaten sepette varsa, miktarını artırır.
```typescript
export const addToCart = (state, action: PayloadAction<CartItem>) => {
    const existingItem = state.items.find((item) => item.id === action.payload.id);
    if(existingItem) {
        existingItem.quantity += action.payload.quantity;
    } else {
        state.items.push(action.payload);
    }
};
```

### `removeFromCart`
Belirli bir ürünü sepetten kaldırır.
```typescript
export const removeFromCart = (state, action: PayloadAction<number>) => {
    state.items = state.items.filter((item) => item.id !== action.payload);
};
```

### `clearCart`
Sepeti tamamen temizler.
```typescript
export const clearCart = (state) => {
    state.items = [];
};
```

### `increaseQuantity`
Belirli bir ürünün miktarını artırır.
```typescript
export const increaseQuantity = (state, action: PayloadAction<number>) => {
    const item = state.items.find((item) => item.id === action.payload);
    if(item) {
        item.quantity += 1;
    }
};
```

### `decreaseQuantity`
Belirli bir ürünün miktarını azaltır. Miktar 1'den küçük olamaz.
```typescript
export const decreaseQuantity = (state, action: PayloadAction<number>) => {
    const item = state.items.find((item) => item.id === action.payload);
    if(item && item.quantity > 1) {
        item.quantity -= 1;
    }
};
```

## Katkıda Bulunma

1. Bu projeyi **fork**'layın.
2. Yeni bir **branch** oluşturun: `git checkout -b yeni-ozellik`.
3. Değişikliklerinizi yapın ve commit edin: `git commit -m "Yeni özellik ekledim"`.
4. **Pull request** gönderin.

## Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır.
