import feature from '../../assets/icons/feature.png';
export default function Features() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 p-6 md:flex-row md:p-12">
      <div className="max-w-md text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-100">
          <img src={feature} alt="Feature Icon" className="w-full" />
        </div>
        <h3 className="mb-2 text-xl font-bold">جودة عالية تدوم طويلاً</h3>
        <p className="text-gray-600">
          نستخدم أفضل أنواع القطن لضمان منتجات تتميز بالمتانة والراحة، سواء كانت
          مراتب، مناشف، أو أرواب.
        </p>
      </div>
      <div className="max-w-md text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-100">
          <img src={feature} alt="feature" className="w-full" />
        </div>
        <h3 className="mb-2 text-xl font-bold">راحة لا تضاهى</h3>
        <p className="text-gray-600">
          نقدم منتجات مصممة لتوفر لك أقصى درجات الراحة، من مراتب مريحة إلى مناشف
          ناعمة وأرواب فاخرة.
        </p>
      </div>
      <div className="max-w-md text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary-100">
          <img src={feature} alt="feature" className="w-full" />
        </div>
        <h3 className="mb-2 text-xl font-bold">تصميمات أنيقة وعصرية</h3>
        <p className="text-gray-600">
          نحرص على تقديم منتجات تجمع بين الجمال والوظيفية، لتضفي لمسة من الأناقة
          على كل جانب من جوانب حياتك.
        </p>
      </div>
    </section>
  );
}
