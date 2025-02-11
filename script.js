function checkName() {
    let playerName = document.getElementById("playerName").value.trim(); // Kullanıcının girdiği ismi al ve boşlukları temizle

    if(playerName == "")
        return

    if (playerName.toLowerCase() !== "gonca") {
        document.getElementById("name-error").style.display = "block"; // Hata mesajını göster
        return;
    }

    document.getElementById("name-container").style.display = "none"; // İsim giriş ekranını gizle
    document.getElementById("intro-container").style.display = "block"; // Giriş ekranını aç
}



function startExam() {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    
    // Başlığı gizle
    document.getElementById("game-title").style.display = "none";
}

function nextStory(choice) {
    let storyText = document.getElementById("story-text");
    let storyQuestion = document.getElementById("story-question");
    let choices = document.getElementById("choices");

    if (choice === 1) {
        storyText.innerHTML = "Harika seçim!11!!bir11!! binaların üzerinden uçarken yalnızca ama yalnızca Lifalif Ay Çekirdekli Domatesli Yulaf Topları satan bir satıcıyla karşılaştın";
        storyQuestion.innerHTML = "Ne yapardın?";
        choices.innerHTML = `
        <button onclick="nextStory(2)">Asla umrumda olmaz</button>
        <button onclick="nextStory(3)">Yaklaşık olarak 7 paket satın alıp çalıştığım kurumda BİLGİ TEKLONONOJİLERİ UZMANI ZAFER BEY - MBA kişisine yediririm</button>
        
        `;
    } else if (choice === 2) {
        storyText.innerHTML = "Maalesef yeterli cevabı veremediniz Gonca Hanım, lütfen en yakın zamanda kurumunuzda çalışan IT uzmanıyla iletişime ve etkileşime hatta her türlü dokunmalı öpmeli interaksiyonlara geçip gerekli cevapları ve eğitimleri alın. Kendinizi geliştirin. Gelecekte ÖPÜŞMEK üzere.....";
        choices.innerHTML = `<button onclick="location.reload()">Baştan Başla</button> `;
        storyQuestion.innerHTML = "";
    } else if (choice === 3) {
        storyQuestion.innerHTML = "";
        storyText.innerHTML = "Gerçekten doğuştan bir yeteneğin var Goncam Hanım? Pekiiiii geleneksel Ninjaku Her Şey Yolunda Mı? toplantılarına istikrarlı bir şekilde tam katılım sağlayacağınıza söz veriyor musunuz?";
        choices.innerHTML = `
        <button onclick="nextStory(4)">Evet</button>
        <button onclick="nextStory(4)">Kesinlikle</button>
        <button onclick="nextStory(4)">Aynen</button>
        `;
    } else if (choice === 4) {
        storyText.innerHTML = "Kadim Ninjame aday avcıları, bu sınava girmeye layık insanları önceden belirleme güçlerine sahiptirler.(what) Adayların görsel hafızalarını ve dikkatlerini test etmek için ipucu kodları bırakmayı severler.";
        storyQuestion.innerHTML = "Peki senin ipucun neydi?";

        // Input ve buton ekleme
        choices.innerHTML = `
            <input type="number" id="userInput" placeholder="İpucu kodunu gir" style="padding: 10px; font-size: 16px; width: 200px;">
            <button onclick="checkAnswer()">Gönder</button>
        `;
    }
}

// Kullanıcının girdiği ipucu kodunu kontrol et
function checkAnswer() {
    
    let userInput = document.getElementById("userInput").value;
    let storyText = document.getElementById("story-text");
    let storyQuestion = document.getElementById("story-question");
    let choices = document.getElementById("choices");

    if(userInput == "")
        return

    storyQuestion.style.display = "none";
    // Doğru ipucu kodu (Bunu değiştirebilirsin)
    let correctCode = "0609";

    

    if (userInput === correctCode) {
       
        storyText.innerHTML = "Tebrikler Goncam Hanım! Sınavı başarıyla geçtiniz!! Bir sonraki aşamaya geçme hakkınız namevcut durumdan mevcut duruma geçmiştir.(??) Diğer aşama için algılarının her zaman açık, kiraz küpelerin her zaman takılı ve o güzel gözlerinin Zafer Bey'in üzerinde olduğundan emin ol. Gelecekte öpüşmek üzere...";
        choices.innerHTML = `<button onclick="location.reload()">Baştan Başla</button>`;
       
    } else {
        storyText.innerHTML = "Yanlış?? Biraz sıktınız galiba Goncam Hanım?? Mümkünse çalışmalarınıza DEVAM EDİN! Zafer Bey - MBA kişisi zevkle sizi çalıştırabilir.";
        choices.innerHTML = `
            <button onclick="location.reload()">Baştan Başla</button>
        `;
    }
}
