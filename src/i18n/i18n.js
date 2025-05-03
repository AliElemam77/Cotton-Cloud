import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      change_language: "Change Language",
      category: "Category",
      price: "Price",
      add_to_cart: "Add to Cart",
      notfound: "Unfortunately, we couldn't find what you were looking for.",
      about_us: "About Us",
      about_paragraph:
        '"Cotton Cloud is a brand dedicated to delivering quality and style in every product we create. Founded with a simple vision: to create products that inspire you and make your life better. We pride ourselves on our dedicated team and the values ​​that drive us to excellence. Join us on our journey to redefine quality."',
      high_quality: "High quality, long lasting",
      comfort: "Unmatched comfort",
      comfort_paragraph:
        "We offer products designed to provide you with maximum comfort, from comfortable mattresses to soft towels and luxurious robes.",
      new: "New",
      landingTitle: "Discover the best products in a modern and stylish way",
      landingSubTitle:
        "Cotton Cloud offers you high-quality cotton products, designed to provide you with comfort and elegance in every detail. Discover our unique collection and enjoy an unforgettable shopping experience!",
      landingButton: "Discover More",
      Robes_and_towels: "Robes and Towels",
      Compare: "Compare",
      SameProducts: "Same Products",
      ramadanOffer: "Discounts up to 40%",
      offerOnBestProducts: "Discounts on best-selling products",
      ProductsYouMayLike: "Products You May Like",
      size: "Size",
      buyNow: "Buy Now",
      orderSummary: "Order Summary",
      CompleteTheOrder: "Complete the Order",
    },
    dir: "ltr",
  },
  ar: {
    translation: {
      welcome: "مرحبًا بك في موقعنا!",
      change_language: "تغيير اللغة",
      category: "الفئة",
      price: "السعر",
      add_to_cart: "اضافة الى السلة",
      notfound: "للأسف، لم نتمكن من العثور على ما تبحث عنه. ",
      about_us: "نبذة عنا",
      about_paragraph:
        '"قطن كلاود هي علامة تجارية تُعنى بتقديم الجودة والأناقة في كل منتج نصنعه. تأسست برؤية بسيطة: صنع منتجات تُلهمك وتجعل حياتك أفضل. نفتخر بفريقنا المتفاني وقيمنا التي تقودنا نحو التميز. انضم إلينا في رحلتنا نحو إعادة تعريف الجودة."',
      high_quality: "جودة عالية، تدوم طويلاً",
      high_quality_paragraph:
        "نستخدم أفضل أنواع القطن لضمان منتجات تتميز بالمتانة والراحة، سواء كانت مراتب، مناشف، أو أرواب.",
      comfort: "راحة لا مثيل لها",
      comfort_paragraph:
        "نقدم منتجات مصممة لتوفر لك أقصى درجات الراحة، من مراتب مريحة إلى مناشف ناعمة وأرواب فاخرة.",

      new: "جديد",
      landingTitle: "اكتشف أفضل المنتجات بأسلوب عصري وأنيق",
      landingSubTitle:
        "قطن كلاود تقدم لك منتجات قطنية عالية الجودة، مصممة لتوفر لك الراحة والأناقة في كل تفصيلة. اكتشف مجموعتنا الفريدة واستمتع بتجربة تسوق لا تُنسى!",
      landingButton: "اكتشف المزيد",
      Robes_and_towels: "أرواب ومناشف",
      Compare: "المقارنة",
      SameProducts: "منتجات مشابهة",
      ramadanOffer: "خصومات تصل ل 40%",
      offerOnBestProducts: "تخفيضات على أفضل المنتجات مبيعا",
      ProductsYouMayLike: "منتجات قد تعجبك",
      size: "المقاس",
      buyNow: "اشتري الآن",
      orderSummary: "ملخص الطلب",
      CompleteTheOrder: "اتمام الطلب",
    },
    dir: "rtl",
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "ar",
  interpolation: { escapeValue: false },
});

export default i18n;
