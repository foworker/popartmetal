import tinytime from 'tinytime'
import Image from 'next/image';
import img from './images/kucuk-mekanlar-icin-dekorasyon-fikirleri.jpg';

const meta = {
    title: 'Küçük Mekanlar İçin Dekorasyon Fikirleri',
    description: 'Küçük alanları dönüştürmek zor olmak zorunda değil. Garip şekilli bir yatak odası veya oturma odasını dekore etmek zor olabilir, ancak güzel bir ev dekorasyonu için hiçbir alan asla çok küçük değildir. ',
    date: '2022-01-26T19:00:00.000Z',
    authors: 'PopArt',
    image: img,
}

let postDateTemplate = tinytime('{DD} {MM} {YYYY}, {dddd}');

export default function Contact() {
    return (
        <section className="mb-6 mt-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {meta.title}
                </p>
                <time dateTime={meta.date}>{postDateTemplate.render(new Date(meta.date))}</time>
                <p className="mt-4 max-w-4xl text-md text-gray-500 lg:mx-auto">{meta.description}</p>
            </div>

            <div className="mt-10">
                <Image
                    src={meta.image}
                    alt={meta.title}
                    className="w-full h-full object-center object-cover" layout="responsive"
                />
                <p className="mt-4 text-md">
                    Bir daire, yatakhane veya başka bir küçük yaşam alanı döşemek istiyorsanız, bu dekorasyon fikirleri ve mobilya seçenekleri kesinlikle seveceğiniz bir alan yaratmanıza yardımcı olacaktır.
                </p>
                <p className="mt-4 text-md">
                    Tüm misafirlerinizi gerçekten etkilemek için yardımcı kılavuzumuzu veya kendi tasarım sezginizi kullanın.
                </p>
                <h3 className='mt-4 font-medium text-lg capitalize'>Küçük Mutfaklar İçin Dekorasyon Fikirleri</h3>
                <p className="mt-4 text-md">
                    Bir mutfakta yerden tasarruf etmek, mutfakta nasıl etkileşim kurduğunuz konusunda tüm farkı yaratabilir. Yemek pişirirken odada özgürce hareket edebilmeniz ve aynı zamanda yeni hazırladığınız bir yemeğin tadını çıkarırken aileniz ve misafirlerinizin oturması için bir masa sunabilmeniz gerekecek! Burada, alanınızda trafiğin daha kolay akmasına yardımcı olacak mükemmel yuvarlak yemek masasını bulacaksınız. Veya hafta boyunca katlanmış halde tutmak ve hafta sonu oyun gecelerine açılmak için mükemmel bir açılır yapraklı masa alın. Alanınız veya tarzınız ne olursa olsun, doğru masa mutfağınızın en iyi şekilde görünmesine ve hissettirmesine yardımcı olabilir.
                </p>
                <p className="mt-4 text-md">
                    Çoğu zaman, çok az tezgah alanı ve çeşitli aletleri olan insanlar mutfak adalarından ve arabalarından yararlanır . Adalar mutfak zemininin ortasına yerleştirilebilirken, arabalar buzdolabının yanına veya pencere pervazının altına gibi diğer alanlara yerleştirilebilir. Mutfak adaları, yemek hazırlamaya yardımcı olmak için bir sabit tavana sahiptir ve genellikle pişirme cihazlarınızı yoldan uzak ve kolay erişilebilir tutmak için yeterli dolap deposuna sahiptir. Farklı dekorlara uyacak şekilde tasarlanmışlardır ancak biraz rustik bir görünüme doğru eğilim gösterirler. Öte yandan, arabalar da bir üste sahiptir, ancak hazırlamaktan çok tutmak içindir. Bazıları dekorunuzu gösterebilecek kapıları olmayan, alt takım depolamaya sahip olma eğilimindedirler. Sonuçta adalardan daha hafifler ve daha çok depolama için kullanılıyorlar.
                </p>
                <p className="mt-4 text-md">
                    Küçük sanat eserleri yakındaki mobilyalar tarafından gölgede bırakılacaktır. Öte yandan, son derece büyük sanat eserleri düşüyormuş gibi görünecektir. Duvar boşluğunun ölçülerini alarak değerlendirebilirsiniz. Bu, ne kadar oda ile çalışacağınız konusunda size bir fikir verecektir.
                </p>
                <h3 className='mt-4 font-medium text-lg capitalize'>Küçük Yatak Odası Dekorasyon Fikirleri</h3>
                <p className="mt-4 text-md">
                    Küçük bir yatak odasında çifte görev yapabilen parçalar seçmeniz gerekebilir. Örneğin, bir kraliçe veya kral yatakta uyuma seçeneğiniz olmayabilir. Ancak yine de büyük bir yatağı tercih ediyorsanız, daha fazla alan yaratmanın bir yolu yatağınızı yükselticilere yerleştirmektir. Veya yerleşik depolamaya sahip bir yatak seçin.
                </p>
                <p className="mt-4 text-md">
                    Tekerlekli kutular, çekmeceler, kilitli kutular veya saklama torbaları gibi seçenekler, size eşyaları altlarında saklama olanağı verir ve alanınızı daha az dağınık bırakır. Bir şifonyer için yeterli yeriniz yoksa, büyük bir komodin kıyafetlerinizi tutmak için iyi bir alternatiftir. Yatağınızın ayakucundaki sedir, battaniye, yastık ve hatta ayakkabı gibi diğer eşyalar için mükemmeldir . Evinizde sahip olabileceğiniz en pratik mobilyalardan biri. Şık olduğu kadar çok yönlü olan sedirler, yatak odanızın ötesinde herhangi bir odada olmazsa olmazlardandır.
                </p>
                <p className="mt-4 text-md">
                    Başka bir ipucu, oda düzenini basit tutmaktır. Yatağınızı odanızın ortasına ortalayarak, her iki tarafta da yürümek için bolca alan bırakacaksınız. Odanın karanlık ve klostrofobik hissetmesini önlemek için bol miktarda ışık kaynağı da eklemelisiniz. Bazı durumlarda, büyük boy aydınlatma armatürleri aslında daha fazla alan yanılsaması yaratabilir. Ardından, perdeler ve perdeler eklemeyi düşünün. Şeffaf perdeler, doğal ışığın içeri girmesi için harikayken, karartma perdeleri, uyku alanlarınıza biraz daha mahremiyet eklemek istediğinizde idealdir. Son olarak, yeni nevresim koordinatları, yorganlar ve kırlentlerle odanıza son dokunuşu yapın.
                </p>
                <h3 className='mt-4 font-medium text-lg capitalize'>Küçük Salon Tasarım Fikirleri</h3>
                <p className="mt-4 text-md">
                    Doku katmanları, mükemmel mobilya seçenekleri ve çok sayıda yaratıcılık, küçük alanınızı hayallerinizdeki odaya dönüştürebilir. Oturma odası perdelerini ve perdeleri tavana mümkün olduğunca yakın asmak, bakışları çekmeye yardımcı olan bir tasarım hilesidir . Modern dekora sahip odalarda en iyisidir çünkü zıt renkler dikkatinizi dağıtmaz. Şeffaf perdeler ve perdeler, herhangi bir odayı arkadaşlarınızı ve ailenizi memnun edecek güzel bir yaşam alanına dönüştürür. Şeffaf perdeler sadece hafif olmakla kalmaz, aynı zamanda pratik ve asılması da kolaydır.
                </p>
                <p className="mt-4 text-md">
                    Ardından, alanınızda istediğiniz mobilya türünü düşünün. Buradaki hile, birkaç görevi yerine getiren çok işlevli parçaları bulmaktır. Örneğin, gömme çekmeceler ve kitap, uzaktan kumanda ve bardak altlığı gibi şeyleri alabilen alanlar sunan  sehpalar , dağınıklığı gidermek ve oturma odanızı toplamak için mükemmeldir.
                </p>
                <p className="mt-4 text-md">
                    Oturma seçenekleri için alçak profilli sandalyeler ve kanepeler önemlidir. Bu tür mobilyalar, bazı geleneksel oturma parçalarında bulunan fazlalık olmadan rahatlık sunan minimalist bir tasarıma sahiptir. Daha fazla işlevsellik için, misafir yatağı olarak ikiye katlanabilen bir yataklı kanepe arayın. Ve işte başka bir hızlı oturma odası tüyosu: Sağlam tabureler yalnızca arkadaşlarınız ve aileniz için ek oturma yeri sağlamakla kalmaz, aynı zamanda kanepenizin veya çift kişilik koltuğunuzun hemen yanında duran bir sehpa olarak da kullanılabilirler!
                </p>
            </div>
        </section>
    );
};

Contact.layoutProps = {meta};