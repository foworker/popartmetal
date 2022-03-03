import tinytime from 'tinytime'
import Image from 'next/image';
import img from './images/metal-duvar-sanati-ev-dekorunda-neden-en-onemlidir.jpg';

const meta = {
    title: 'Metal Duvar Sanatı Ev Dekorunda Neden En Önemlidir?',
    description: `Hayaller, aşk ve umut evde başlar. Evinizi şık ve modaya uygun hale getirmek çok önemlidir. Ancak bu düşündüğünüz kadar kolay değil çünkü iç tasarım çok şey gerektiriyor.`,
    date: '2022-01-24T19:00:00.000Z',
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
                    Evinizi dekore etmeden önce, bölgedeki stilleri ve temaları dikkate almak çok önemlidir. Duvarlarınızı doğru metal duvar sanatını kullanarak dekore etmek, evinizin şık görünmesini sağlayabilir.
                </p>
                <p className="mt-4 text-md">
                    Metal duvar sanatı öğelerini kullanmak, hayalinizdeki dış mekan veya iç mekan tasarımına ulaşmanıza yardımcı olabilir. Ayrıca metal duvar sanatı, evinizin iç tasarımında önemli bir rol oynar. Metal siğil sanatının ev dekorunda en önemli olmasının nedeni budur.
                </p>
                <h3 className='mt-4 font-medium text-lg capitalize'>cazibe merkezi</h3>
                <p className="mt-4 text-md">
                    İç mekan tasarımının temel prensipleri söz konusu olduğunda her odanın bir merkezi noktası olmalıdır. Ne beklemesi gerektiği konusunda izleyicinin dikkatini hemen çekecek bir alan.
                </p>
                <p className="mt-4 text-md">
                    İyi bir metal duvar sanatı parçası, tüm bir yerin görünüşünü değiştirebilir. Ancak, alanınız için bir duvar resmi seçmeden önce boyutu dikkate almanın iyi olduğunu unutmamak önemlidir.
                </p>
                <p className="mt-4 text-md">
                    Küçük sanat eserleri yakındaki mobilyalar tarafından gölgede bırakılacaktır. Öte yandan, son derece büyük sanat eserleri düşüyormuş gibi görünecektir. Duvar boşluğunun ölçülerini alarak değerlendirebilirsiniz. Bu, ne kadar oda ile çalışacağınız konusunda size bir fikir verecektir.
                </p>
                <h3 className='mt-4 font-medium text-lg capitalize'>dayanıklılık</h3>
                <p className="mt-4 text-md">
                    En dayanıklı ev iç tasarım öğelerinden biri metal duvar sanatıdır. Dekor öğelerinde maliyet düşürmeyi düşünüyorsanız, metal duvar sanatları almayı düşünün. Bu öğeler az bakım gerektirir, güçlüdür ve nadiren hasar görebilir. Metal duvar sanatları uzun ömürlüdür ve nesillere aktarılabilir.
                </p>
                <h3 className='mt-4 font-medium text-lg capitalize'>Uygun maliyetli</h3>
                <p className="mt-4 text-md">
                    Çoğu insan metal duvar sanatının pahalı olduğunu varsayar; bu nedenle evlerini dekore etmek için diğer sanat türlerini kullanmayı tercih ederler. Gerçek şu ki, metal duvar sanatı diğer duvar sanatı dekorlarına göre daha ucuzdur.
                </p>
                <p className="mt-4 text-md">
                    Şaşırtıcı bir şekilde, metal duvar sanatı tasarlamak için kullanılan hammaddeler uygun fiyatlı. Ancak gelecekte maliyet artabilir. Öyleyse neden güneş parlarken saman yapmıyorsunuz? Daha düşük bir fiyata çok sayıda güzel metal duvar sanatı parçası satın almayı düşünün.
                </p>
                <h3 className='mt-4 font-medium text-lg capitalize'>Odanıza güzel bir bitmiş görünüm verir</h3>
                <p className="mt-4 text-md">
                    Doğru metal duvar resmini kullanmak, bir odanın eksiksiz görünmesini sağlayabilir. Duvar sanatı, odanıza harika bir iç tasarım görünümü verebilecek bir bitirme öğesidir. Bu harika görünümü elde etmenin anahtarı, odanızın dekorasyon stiline uygun bir sanat eseri seçmektir. Beğendiğiniz ve duvarınızda görmekten memnun kalacağınız bir dekor seçmenin önemli olduğunu lütfen unutmayın.
                </p>
            </div>
        </section>
    );
};

Contact.layoutProps = {meta};