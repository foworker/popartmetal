import tinytime from 'tinytime'
import Image from 'next/image';
import img from './images/oturma-odanizi-nasil-dekore-edersiniz.jpg';

const meta = {
    title: 'Oturma Odanızı Nasıl Dekore Edersiniz?',
    description: 'Evinizde arkadaşlarınızın ve ailenizin mutlaka bir araya geleceği yer oturma odasıdır. Sohbet etmek, oyun oynamak, TV veya film izlemek ve sadece arkanıza yaslanıp rahatlamak için bir alan sağlayan rahat bir yer.',
    date: '2022-01-28T19:00:00.000Z',
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
                    Alanı daha da davetkar ve davetkar hale getirmek için, onu rahat ve çekici bir atmosfer yaratan göz alıcı vurgular ve öğelerle dekore etmek isteyeceksiniz. Kucaklamak istediğiniz tarz veya trend ne olursa olsun, PopArt ambiyansı yükseltmek için gereken tüm oturma odası dekorlarına sahiptir. Geniş mobilya, dekoratif aksan ve daha fazla ürün yelpazemizi satın alın ve herkesin seveceği bir alan yaratın!
                </p>
                <h3 className='mt-4 font-medium text-lg capitalize'>Temel Oturma Odası Dekoru</h3>
                <p className="mt-4 text-md">
                    Bazı eşyalar bir oturma odasında olmazsa olmazlardandır. Alanı geliştirir, işlevsellik sunar ve tüm odayı birbirine bağlar!
                </p>
                <h4 className='mt-4 font-medium text-md'>Mobilya</h4>
                <p className="mt-4 text-md">
                    Mobilyasız oturma odası olmaz ! Evin bu zımbaları, sizin ve misafirlerinizin oturacak bir yeri, eşyaları tutacak yüzeyleri, diğer temel ihtiyaçlar için depolama alanı ve çok daha fazlasını yapmanızı sağlar.
                </p>
                <p className="mt-4 text-md">
                    Kişisel tarzınıza uygun mobilya seçmenin yanı sıra, mobilya öğelerini yaşam alanınız boyunca sohbeti ve doğru akışı teşvik edecek şekilde düzenlediğinizden emin olun. Bir mobilya, şömine, sanat eseri veya televizyon gibi oldukça görünür bir özelliği odak noktası olarak kullanın ve mobilyalarınızı bunun etrafına yerleştirin. İnsanların oturma odasında kolaylıkla manevra yapabilmeleri için yeterli alana izin verirken, odada birbirleriyle konuşmayı kolaylaştıran noktalar oluşturmaya devam edin.
                </p>
                <p className="mt-4 text-md">
                    Mobilya parçalarının yanı sıra, toplam görünümü bir araya getiren şık ve uyumlu bir alan kilim ekleyin! Ancak seçtiğiniz herhangi bir alan kiliminin alana tam olarak uyduğundan emin olun - kilim ile duvar arasında yaklaşık bir fit boşluk bırakın ve mobilya parçalarınızı kilim üzerine yerleştirdiğinizden emin olun.
                </p>
                <h4 className='mt-4 font-medium text-md'>Aydınlatma</h4>
                <p className="mt-4 text-md">
                    Oturma odanızı iyi aydınlatmak, alanınızın sıcak olmasını sağlamanın da harika bir yoludur. Düzgün aydınlatılmış bir alan sadece sizin ve misafirlerinizin odada vakit geçirmek istemesini sağlamakla kalmaz, aynı zamanda aydınlatma elbette işlevseldir ve aynı zamanda ilgiyi de artırabilir.
                </p>
                <p className="mt-4 text-md">
                    Ortam, vurgu ve görev aydınlatması dahil olmak üzere birden fazla aydınlatma türü vardır . Ortam aydınlatması, aydınlatmanın daha işlevsel türüdür. Bir odayı aydınlatmak için tasarlanmıştır, insanların alanı görmelerine ve içinde güvenli bir şekilde hareket etmelerine olanak tanır. Ortam aydınlatmasına örnek olarak avizeler ve zemin/masa lambaları dahildir.
                </p>
                <p className="mt-4 text-md">
                    Görev aydınlatması temelde kulağa nasıl geliyorsa öyledir – belirli görevleri veya etkinlikleri kolaylıkla gerçekleştirmenizi sağlayan aydınlatmadır. Bir oturma odası için bu, kolayca okumanıza, bilgisayarı uygun aydınlatmada kullanmanıza vb. olanak tanıyan bir görev aydınlatmasına sahip olabileceğiniz anlamına gelir. Görev aydınlatmasına örnek olarak bir masa lambası veya gömme yönlü ışık verilebilir.
                </p>
                <p className="mt-4 text-md">
                    Son olarak, vurgulu aydınlatma, belirli bir noktaya dikkat çekmek ve bir odayı daha büyük hissettirmek için tasarlanmıştır. Aydınlatmanın bu bölümündeki örnekler, raylı aydınlatmayı ve duvarlara veya tavana monte edilmiş aydınlatma armatürlerini içerir.
                </p>
                <h4 className='mt-4 font-medium text-md'>Duvar Sanatı ve Dekor</h4>
                <p className="mt-4 text-md">
                    Oturma odanızın duvarlarındaki boşlukları doldurmak, evinizin görünümünü yükseltmek söz konusu olduğunda yapılması gereken bir diğer şeydir. Sanat eseri, aile fotoğrafları veya diğer aksanları kullanmak isteseniz de, evinizin görünümünü ve hissini geliştirmek için duvarlarınızı duvar sanatıyla süslemek çok önemlidir.
                </p>
                <p className="mt-4 text-md">
                    Pencere uygulamaları, masa dekoru, dekoratif yastıklar ve örtüler ve çok daha fazlası dahil olmak üzere oturma odanızın görünümünü yepyeni bir düzeye çıkarmak için başka vurgular bulduğunuzdan emin olun!
                </p>
                <p className="mt-4 text-md">
                    Evinizi nasıl dekore edeceğinize dair ilham arıyorsanız, herkesin alanına uyan popüler trendlerden bazılarını göz önünde bulundurun. Bahsetmemek gerekirse, PopArt'ta bu tarzlara uyan birçok aksan bulacağınızdan emin olabilirsiniz!
                </p>
                <p className="mt-4 text-md">
                    Klasik rustik çiftlik evlerinden ilham alan bu dekor trendi, aynı anda hem nostaljik hem de taze olan eski moda bir görünüm ve his sunuyor. Çiftlik evi dekor öğeleri, gösterişli olmayan, ancak zamansız olacağından emin olan bir görünüm sağlayan nötr bir palete sahip olma eğilimindedir. Tipik olarak, bej, gri ve beyaz gibi renkler tabanı oluşturur ve yumuşak toprak tonları, herhangi bir odaya sıcaklık ve çekicilik sağlamak için biberlenir.
                </p>
            </div>
        </section>
    );
};

Contact.layoutProps = { meta };