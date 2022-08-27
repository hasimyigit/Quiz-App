let body = document.querySelector('.card-body');
let nextBtn = document.querySelector('#next');
let tryBtn = document.querySelector('#try');
let fullname = document.querySelector('#fullname');
let nameSpan = document.querySelector('#nameSpan');
let chartDiv = document.querySelector('#chart');
let yapdusLi = document.querySelectorAll('li')[0];
let hissezLi = document.querySelectorAll('li')[1];
let goristLi = document.querySelectorAll('li')[2];
let sirbutLi = document.querySelectorAll('li')[3];

class Quiz {
    constructor(Questions) {
        this.Questions = Questions;
        this.yap = 0;
        this.dus = 0;
        this.his = 0;
        this.sez = 0;
        this.gor = 0;
        this.ist = 0;
        this.sir = 0;
        this.but = 0;

        this.sayfa = -11;
        this.fullname =null;
    }

    getQuestions() {
        let arr = [...this.Questions]
        return arr.splice(this.sayfa, 11);
    }
}
class Question {
    constructor(title, chics) {
        this.title = title;
        this.chics = chics;
        
    }

}



let questions = [];

factoryQuestion(
    'Bir şeyi',
    'denedikten sonra daha iyi anlarım.',
    'üzerinde düşündükten sonra daha iyi anlarım.',
    'yap', 'dus')

factoryQuestion(
    'Daha çok',
    'gerçekçi biri olarak nitelendirilmeyi tercih ederim.',
    'yenilikçi biri olarak nitelendirilmeyi tercih ederim.',
    'his', 'sez')

factoryQuestion(
    'Dün ne yaptığım hakkında düşündüğüm zaman, daha çok',
    'bir resim elde ediyorum.',
    'kelimeler elde ediyorum.',
    'gor', 'ist')

factoryQuestion(
    ' ',
    'Konunun detaylarını iyi anlarım ancak genel yapı hakkında pek net olamamaya eğilimim vardır. ',
    'Konunun genelini çok iyi anlarım ama detaylara tam hakim olamamaya eğilimim vardır',
    'sir', 'but')

factoryQuestion(
    'Yeni bir şey öğrenirken',
    'o konu hakkında konuşmak',
    'o konu hakkında düşünmek bana yardımcı olur',
    'yap', 'dus')

factoryQuestion(
    'Eğer bir öğretmen olsaydım',
    'olgular ve gerçek hayat durumlarını ele alan bir dersi öğretmeyi tercih ederdim. ',
    'fikirler ve teorileri ele alan bir dersi öğretmeyi tercih ederdim. ',
    'his', 'sez')

factoryQuestion(
    'Yeni bilgileri',
    'resimler, şemalar, grafikler veya haritalar olarak almayı tercih ederim. ',
    'yazılı yönlendirmeler veya sözlü̈ bilgiler olarak almayı tercih ederim. ',
    'gor', 'ist')

factoryQuestion(
    ' ',
    'Tüm parçaları anladığımda, bütünü anlarım ',
    'Bütünü anladığımda, parçaların nasıl uyduğunu görürüm. ',
    'sir', 'but')

factoryQuestion(
    'Çalışma grubunda, zor bir konu üzerine çalışırken, daha çok',
    'hemen tartışmaya dahil olur, görüşlerimle katkıda bulunurum. ',
    'arkama yaslanır ve dinlerim. ',
    'yap', 'dus')

factoryQuestion(
    ' ',
    'Olguları öğrenmeyi daha kolay bulurum. ',
    'Kavramları öğrenmeyi daha kolay bulurum. ',
    'his', 'sez')

factoryQuestion(
    'Birçok resim ve çizim ile dolu bir kitapta',
    'resimlere ve çizimlere dikkatlice göz gezdiririm. ',
    'yazılı metine odaklanırım',
    'gor', 'ist')

factoryQuestion(
    'Matematik problemleri çözerken',
    'genelde çözümlere adım adım giderim',
    'genellikle çözümleri hemen bulurum sonra çözümlere ulaşmak için gerekli adımları anlamaya çalışmakla uğraşmam gerekir',
    'sir', 'but')

factoryQuestion(
    'Daha önce aldığım derslerde ',
    'genelde birçok öğrenciyi tanırım',
    'nadiren sınıftaki öğrencileri tanırım',
    'yap', 'dus')

factoryQuestion(
    ' Kurgusal olmayan düzyazıda',
    'bana yeni olgular öğreteni veya bir şeyi nasıl yapacağımı anlatanı tercih ederim ',
    'bana düşünmem için yeni fikirler vereni tercih ederim',
    'his', 'sez')

factoryQuestion(
    ' ',
    'Tahtaya birçok şema çizen öğretmenleri severim. ',
    'Zamanın çoğunu açıklama yaparak geçiren öğretmenleri severim. ',
    'gor', 'ist')

factoryQuestion(
    'Bir hikâye veya roman analizi yaparken ',
    'olayları düşünür ve bunları bir araya getirerek konuyu anlamaya çalışırım olayları bulurum.',
    'okumayı bitirdiğimde konunun ne olduğunu anlarım ve sonra geri dönüp bu konuyu oluşturan olayları bulurum.',
    'sir', 'but')

factoryQuestion(
    'Bir ev ödevi problemine başladığım zaman, daha çok',
    'hemen sonuç üzerinde çalışmaya başlarım.',
    'ilk önce problemin tamamını anlamaya çalışırım. ',
    'yap', 'dus')

factoryQuestion(
    ' ',
    'Kesin düşünceyi tercih ederim',
    'Teorik düşünceyi tercih ederim',
    'his', 'sez')

factoryQuestion(
    'En iyi',
    'gördüğümü',
    'duyduğumu',
    'gor', 'ist')

factoryQuestion(
    'Benim için eğitmenin',
    'materyali açık ve sıralı adımlarla sunması',
    'bütün resmi vermesi ve materyali diğer konularla ilişkilendirmesi daha önemlidir. ',
    'sir', 'but')

factoryQuestion(
    ' ',
    'Bir çalışma grubu içinde çalışmayı tercih ederim. ',
    'Yalnız çalışmayı tercih ederim.  ',
    'yap', 'dus')

factoryQuestion(
    'Daha çok',
    'çalışmamın detayları hakkında dikkatli olarak nitelendirilirim.',
    'çalışmamı nasıl yaptığım hakkında yaratıcı biri olarak nitelendirilirim.',
    'his', 'sez')

factoryQuestion(
    'Yeni bir yer için tarif aldığımda',
    'bir harita tercih ederim. ',
    'yazılı yönergeler tercih ederim. ',
    'gor', 'ist')

factoryQuestion(
    ' ',
    'Oldukça düzenli adımlarla öğrenirim. Eğer çok çalışırsam, onu elde ederim ',
    'Rastgele çalışarak öğrenirim. Tamamen kafam karışır, daha sonra bir anda hepsiyerine oturur',
    'sir', 'but')


factoryQuestion(
    'Önce bir şeyi',
    'denemeyi tercih ederim. ',
    'nasıl yapacağım konusunda düşünmeyi tercih ederim. ',
    'yap', 'dus')

factoryQuestion(
    'Eğlenmek için okuduğumda ne demek istediğini ',
    'açıkça söyleyen yazarları severim. ',
    'yaratıcı, ilginç yollarla ifade eden  yazarları severim. ',
    'his', 'sez')

factoryQuestion(
    'Derste şema ya da çizim gördüğümde, en çok',
    'bu resmi hatırlarım.',
    'eğitmenin bunun hakkında söylediklerini hatırlarım.',
    'gor', 'ist')

factoryQuestion(
    'Bir grup bilgiyi değerlendirirken, daha çok',
    'detaylara odaklanır ve büyük resmi kaçırırım.',
    'detaylara girmeden önce büyük resmi anlamaya çalışırım.',
    'sir', 'but')

factoryQuestion(
    ' ',
    'Yaptığım bir şeyi daha kolay hatırlarım.',
    'Üzerinde çok düşündüğüm bir şeyi daha kolay hatırlarım.',
    'yap', 'dus')

factoryQuestion(
    'Bir görev yerine getirmem gerektiğinde, genelde tercihim ',
    'o işi yapmanın en iyi yolunu tam öğrenmektir.',
    'o işi yapmanın yeni yollarını bulmaktır. ',
    'his', 'sez')

factoryQuestion(
    'Biri veri gösterdiği zaman',
    'şema veya grafikleri tercih ederim',
    'sonuçları özetleyen metni tercih ederim. ',
    'gor', 'ist')

factoryQuestion(
    'Yazı yazarken, daha çok',
    'yazının başı üzerinde çalışırım (düşünürüm veya yazarım) ve ileriye doğru geliştiririm',
    'yazının farklı parçaları üzerine çalışırım (düşünürüm veya yazarım) ve sonra onları sıraya koyarım',
    'sir', 'but')

factoryQuestion(
    'Bir grup projesinde çalışmam gerektiğinde, ilk olarak',
    'herkesin fikirleriyle katkıda bulunduğu bir beyin fırtınası isterim',
    'bireysel beyin fırtınasından sonra grup ile fikirleri karşılaştırmak için bir araya gelmeyi isterim.',
    'yap', 'dus')

factoryQuestion(
    'Birine',
    'mantıklı diye hitap etmenin daha yüksek bir övgü olduğunu düşünürüm.',
    'hayal gücü̈ kuvvetli diye hitap etmenin daha yüksek bir övgü olduğunu düşünürüm.',
    'his', 'sez')

factoryQuestion(
    ' Bir partide insanlarla tanıştığımda, onların daha çok ',
    'nasıl göründüklerin hatırlarım.',
    'kendileri hakkında ne söylediklerini hatırlarım.',
    'gor', 'siz')

factoryQuestion(
    'Yeni bir konu öğrenirken',
    'konu üzerinde odaklanıp, konu hakkında öğrenebildiğim kadar çok şey öğrenmeyi tercih ederim',
    'o konu ve ilgili konular arasında bağlantı kurmaya çalışmayı tercih ederim. ',
    'sir', 'but')

factoryQuestion(
    'Daha çok',
    'dışa dönük biri olarak nitelendirilirim.',
    'çekingen biri olarak nitelendirilirim.',
    'yap', 'dus')

factoryQuestion(
    ' ',
    'Somut materyal (olaylar, veri) üzerinde duran dersleri tercih ederim.',
    'Soyut materyal (kavramlar, teoriler) üzerinde duran dersleri tercih ederim.',
    'his', 'sez')

factoryQuestion(
    ' Eğlence için',
    'televizyon seyretmeyi tercih ederim.',
    'kitap okumayı tercih ederim.',
    'gor', 'ist')

factoryQuestion(
    'Bazı öğretmenler derslerine işleyecekleri konuların ana hatları ile başlarlar. Bu ana hatlar bana',
    'biraz yardımcı olur.',
    'çok yardımcı olur.',
    'sir', 'but')

factoryQuestion(
    'Bütün gruba aynı notun verileceği bir grupta çalışma fikri benim için',
    'uygundur (çekicidir)',
    'uygun değildir (çekici değildir). ',
    'yap', 'dus')

factoryQuestion(
    'Uzun hesaplamalar yaptığım zaman',
    'bütün adımlarımı tekrarlama ve işimi dikkatlice kontrol etme eğilimindeyimdir',
    'işimi kontrol etmeyi yorucu (sıkıcı) bulurum ve kontrol yapmak için kendimi zorlarım.',
    'his', 'sez')

factoryQuestion(
    'Daha önce bulunduğum yerleri',
    'kolay ve oldukça doğru resmetmek eğilimindeyimdir. ',
    'zor ve az detayla resmetmek eğilimindeyimdir. ',
    'gor', 'ist')

factoryQuestion(
    'Grup içinde problem çözerken, ben daha çok',
    'çözüm sürecindeki adımları düşünürüm ',
    'çözümlerin geniş çaptaki alanlarda olası sonuçlarını ve uygulamalarını düşünürüm. ',
    'sir', 'but')

function factoryQuestion(title, chic1, chic2, type1, type2) {
    let ques = new Question(title, [{
        description: chic1,
        type: type1
    }, {
        description: chic2,
        type: type2
    }])

    questions.push(ques);
}


let quiz1 = new Quiz(questions)

function QuestionLoad() {
    let html = '';

    body.innerHTML = ''

    quiz1.sayfa += 11;

        if( quiz1.sayfa >= 11){
            fullname.style.display = 'none'
            if(!quiz1.fullname){
                quiz1.fullname= fullname.value;
            }
             
        }
        
    if (quiz1.sayfa == 44) {
        //finish
        result(quiz1.yap, quiz1.dus , quiz1.his, quiz1.sez, quiz1.gor, quiz1.ist, quiz1.sir, quiz1.but);
     
        nameSpan.style.display = 'inline-block'
        nextBtn.style.display = 'none'
        tryBtn.style.display = 'inline-block'
        chartDiv.style.display = 'inline-block'
    } else {
        nameSpan.style.display = 'none'
        nextBtn.style.display = 'inline-block'
        tryBtn.style.display = 'none'
        chartDiv.style.display = 'none'
    }

    let Questions = quiz1.getQuestions();




    Questions.forEach((Question, i) => {

        html += `<div class="Question${i}">
                <h5 id="question" class="card-title">
                ${Question.title}
                </h5>
                
                <div id="radios">
                </div>
                </div>
                <hr>
                `
    })


    body.innerHTML = html;

    let radio = '';
    Questions.forEach((Question, index) => {

        let QuestionDiv = document.querySelector('.Question' + index)
        QuestionDiv.querySelector('#radios').innerHTML = ''

        Question.chics.forEach((chic, i) => {
            radio += `<input type="radio" name="${index}" id="blue" value="${chic.type}"> ${chic.description} <br>`

        })
        QuestionDiv.querySelector('#radios').innerHTML = radio;
        radio = '';
    });
}


let chicsValues = ['']
nextBtn.addEventListener('click', () => {
let toplamSecim = 0;
    document.querySelectorAll('input[type="radio"').forEach((el) => {
        if (el.checked) {
            toplamSecim++
            if (el.value == 'yap') {
                quiz1.yap++;
            } else if (el.value == 'dus') {
                quiz1.dus++;
            } else if (el.value == 'his') {
                quiz1.his++;
            } else if (el.value == 'sez') {
                quiz1.sez++;
            } else if (el.value == 'gor') {
                quiz1.gor++;
            } else if (el.value == 'ist') {
                quiz1.ist++;
            } else if (el.value == 'sir') {
                quiz1.sir++;
            } else {
                quiz1.but++;
            }

        }
    })
    if(toplamSecim < 11){
        alert('Boş geçilemez')
    }else{
        QuestionLoad();
    }
    
})


tryBtn.addEventListener('click', () => {

    quiz1.sayfa = -11;
    quiz1.yap = 0;
    quiz1.dus = 0;
    quiz1.his = 0;
    quiz1.sez = 0;
    quiz1.gor = 0;
    quiz1.ist = 0;
    quiz1.sir = 0;
    quiz1.but = 0;
    QuestionLoad();

    location.reload();
})

function result(yap,dus,his,sez,gor,ist,sir,but) {
barLoad(yapdusLi,yap-dus);
barLoad(hissezLi,his-sez);
barLoad(goristLi,gor-ist);
barLoad(sirbutLi,sir-but);

nameSpan.innerHTML = `<b>${quiz1.fullname}</b> için Anket Sonuçları`
}

function barLoad(li,fark){

    if(Math.sign(Number(fark)) == -1){
        fark = fark * -1;
    let yuzde = fark*9+'%';
    let right = li.querySelector('.right')
    right.parentElement.style.width = yuzde
    right.parentElement.nextElementSibling.classList.add("big");
   console.log(right.parentElement.nextElementSibling)
    right.textContent = fark;
    right.style.left = yuzde

}else {
    let left = li.querySelector('.left')
    let yuzde = fark*9+'%';
    left.parentElement.style.width = yuzde
    left.parentElement.nextElementSibling.classList.add("big");
    left.textContent = fark;
    left.style.right = yuzde
}

}


QuestionLoad();