let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

const swiper = new Swiper('.doctors-swiper', {
  loop: true, // Permite navegação infinita
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  slidesPerView: 1, // Um slide por vez em telas pequenas
  spaceBetween: 20, // Espaçamento entre os slides
  breakpoints: {
      768: {
          slidesPerView: 2, // Dois slides em tablets
      },
      1024: {
          slidesPerView: 3, // Três slides em desktops
      }
  }
});



menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Função para aplicar máscara no telefone enquanto o usuário digita
document.getElementById('phone').addEventListener('input', function(event) {
    var phone = event.target.value;
    phone = phone.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
    if (phone.length > 10) {
      phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 5) {
      phone = phone.replace(/(\d{2})(\d{5})/, '($1) $2');
    } else if (phone.length > 2) {
      phone = phone.replace(/(\d{2})/, '($1)');
    }
    event.target.value = phone;
  });

  // Validação do formulário
  document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    // Coleta os valores dos campos
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;

    // Expressão regular para validar o formato do telefone (ex: (11) 99999-9999)
    var phonePattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    // Verifica se o telefone está no formato correto
    if (!phonePattern.test(phone)) {
      alert("Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX.");
      return; // Impede o envio do formulário se o telefone estiver errado
    }

    // Cria o texto que será enviado pelo WhatsApp
    var whatsappMessage = `Olá, meu nome é ${name}. Estou interessado no serviço de ${service} e gostaria de saber mais informações, como valores, pacotes disponíveis e outros detalhes. Além disso, gostaria de saber quais são os horários disponíveis para o dia ${date}.`;

    // Formata a URL para redirecionar ao WhatsApp com a mensagem
    var whatsappUrl = `https://wa.me/5515997454357?text=${encodeURIComponent(whatsappMessage)}`;

    // Redireciona para o WhatsApp
    window.open(whatsappUrl, '_blank');
  });




  


  function showMore(fisioCard) {
    const card = document.getElementById(fisioCard);

    // Remove a classe ativa de todos os cards
    document.querySelectorAll('.box').forEach((item) => {
        item.classList.remove('active');
    });

    // Atualiza o conteúdo do card usando innerHTML
    card.innerHTML = `
        <h3>Fisioterapia</h3>
        <p>Fisioterapia é essencial para recuperação de lesões, alívio de dores e melhora na qualidade de vida. Nossos especialistas estão prontos para cuidar de você!</p>
        <button class="btn" onclick="resetCard('${fisioCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
    `;

    // Adiciona a classe ativa para destacar o card
    card.classList.add('active');
}

function resetCard(fisioCard) {
    const card = document.getElementById(fisioCard);

    // Volta o conteúdo inicial usando innerHTML
    card.innerHTML = `
        <img src="fisio.png" alt="Fisioterapia">
        <h3>Fisioterapia</h3>
        <p>Recupere seus movimentos, vença a dor e viva com mais liberdade.</p>
        <button class="btn" onclick="showMore('${fisioCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
    `;

    // Remove a classe ativa para voltar ao estilo original
    card.classList.remove('active');
}


function showMore1(acuCard) {
    const card = document.getElementById(acuCard);

    // Remove a classe ativa de todos os cards
    document.querySelectorAll('.box').forEach((item) => {
        item.classList.remove('active');
    });

    // Atualiza o conteúdo do card usando innerHTML
    card.innerHTML = `
        <h3>Acupuntura</h3>
        <p>Acupuntura é fundamental para alívio de dores, controle de estresse e melhora do bem-estar. Nossos especialistas estão prontos para cuidar de você!</p>
        <button class="btn" onclick="resetCard1('${acuCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
    `;

    // Adiciona a classe ativa para destacar o card
    card.classList.add('active');
}

function resetCard1(acuCard) {
    const card = document.getElementById(acuCard);

    // Volta o conteúdo inicial usando innerHTML
    card.innerHTML = `
        <img src="acupuntura.png" alt="acupuntura">
        <h3>Acupuntura</h3>
        <p>Equilibre sua energia, relaxe a mente e sinta o poder da harmonia.</p>
        <button class="btn" onclick="showMore1('${acuCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
    `;

    // Remove a classe ativa para voltar ao estilo original
    card.classList.remove('active');
}








function showMore2(ventCard) {
  const card = document.getElementById(ventCard);

  // Remove a classe ativa de todos os cards
  document.querySelectorAll('.box').forEach((item) => {
      item.classList.remove('active');
  });

  // Atualiza o conteúdo do card usando innerHTML
  card.innerHTML = `
      <h3>Ventosaterapia</h3>
      <p>Ventosaterapia é eficaz no alívio de dores, melhora da circulação e redução de tensões. Nossos especialistas estão prontos para cuidar de você!</p>
      <button class="btn" onclick="resetCard2('${ventCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
  `;

  // Adiciona a classe ativa para destacar o card
  card.classList.add('active');
}

function resetCard2(ventCard) {
  const card = document.getElementById(ventCard);

  // Volta o conteúdo inicial usando innerHTML
  card.innerHTML = `
      <img src="ventosas.png" alt="ventosas">
      <h3>Ventosaterapia</h3>
      <p>Desbloqueie a energia, alivie tensões e melhore o fluxo sanguíneo.</p>
      <button class="btn" onclick="showMore2('${ventCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
  `;

  // Remove a classe ativa para voltar ao estilo original
  card.classList.remove('active');
}





function showMore3(massagCard) {
  const card = document.getElementById(massagCard);

  // Remove a classe ativa de todos os cards
  document.querySelectorAll('.box').forEach((item) => {
      item.classList.remove('active');
  });

  // Atualiza o conteúdo do card usando innerHTML
  card.innerHTML = `
      <h3>Liberação Miofacial</h3>
      <p>Liberte-se das tensões corporais e recupere o equilíbrio físico e mental com a técnica de liberação miofascial.</p>
      <button class="btn" onclick="resetCard3('${massagCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
  `;

  // Adiciona a classe ativa para destacar o card
  card.classList.add('active');
}

function resetCard3(massagCard) {
  const card = document.getElementById(massagCard);

  // Volta o conteúdo inicial usando innerHTML
  card.innerHTML = `
      <img src="massagem-corporal.png" alt="ventosas">
      <h3>Liberação Miofacial</h3>
      <p>Alivie dores e recupere movimentos com técnicas eficazes.</p>
      <button class="btn" onclick="showMore3('${massagCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
  `;

  // Remove a classe ativa para voltar ao estilo original
  card.classList.remove('active');
}







function showMore4(coneCard) {
  const card = document.getElementById(coneCard);

  // Remove a classe ativa de todos os cards
  document.querySelectorAll('.box').forEach((item) => {
      item.classList.remove('active');
  });

  // Atualiza o conteúdo do card usando innerHTML
  card.innerHTML = `
      <h3>Psicanálise</h3>
      <p>Compreenda sua mente e seus conflitos internos, liberte-se das amarras do inconsciente com a abordagem da psicanálise.</p>
      <button class="btn" onclick="resetCard4('${coneCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
  `;

  // Adiciona a classe ativa para destacar o card
  card.classList.add('active');
}

function resetCard4(coneCard) {
  const card = document.getElementById(coneCard);

  // Volta o conteúdo inicial usando innerHTML
  card.innerHTML = `
      <img src="procurar.png" alt="ventosas">
      <h3>Psicanálise</h3>
      <p>Explore sua mente e descubra o equilíbrio emocional por meio da psicanálise.</p>
      <button class="btn" onclick="showMore4('${coneCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
  `;

  // Remove a classe ativa para voltar ao estilo original
  card.classList.remove('active');
}





function showMore5(psicoCard) {
  const card = document.getElementById(psicoCard);

  // Remove a classe ativa de todos os cards
  document.querySelectorAll('.box').forEach((item) => {
      item.classList.remove('active');
  });

  // Atualiza o conteúdo do card usando innerHTML
  card.innerHTML = `
      <h3>Psicoterapia Integrativa</h3>
      <p>Foco no equilíbrio de mente, corpo, emoções e espiritualidade, atendendo às necessidades individuais de forma integrativa.</p>
      <button class="btn" onclick="resetCard5('${psicoCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
  `;

  // Adiciona a classe ativa para destacar o card
  card.classList.add('active');
}

function resetCard5(psicoCard) {
  const card = document.getElementById(psicoCard);

  // Volta o conteúdo inicial usando innerHTML
  card.innerHTML = `
      <img src="psicoterapia.png" alt="ventosas">
      <h3>Psicoterapia Integrativa</h3>
      <p>Promove equilíbrio emocional, cognitivo, comportamental, espiritual e físico.</p>
  
      <button class="btn" onclick="showMore5('${psicoCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
  `;

  // Remove a classe ativa para voltar ao estilo original
  card.classList.remove('active');}








  function showMore6(hipCard) {
    const card = document.getElementById(hipCard);
  
    // Remove a classe ativa de todos os cards
    document.querySelectorAll('.box').forEach((item) => {
        item.classList.remove('active');
    });
  
    // Atualiza o conteúdo do card usando innerHTML
    card.innerHTML = `
        <h3>Hipnose Clínica</h3>
        <p>Técnica que utiliza relaxamento profundo para acessar o subconsciente e estimular mudanças emocionais e comportamentais.</p>
        <button class="btn" onclick="resetCard6('${hipCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
    `;
  
    // Adiciona a classe ativa para destacar o card
    card.classList.add('active');
  }
  
  function resetCard6(hipCard) {
    const card = document.getElementById(hipCard);
  
    // Volta o conteúdo inicial usando innerHTML
    card.innerHTML = `
        <img src="hipnose.png">
        <h3>Hipnose Clínica</h3>
        <p>Promove mudanças positivas acessando o subconsciente com relaxamento profundo.</p>
    
        <button class="btn" onclick="showMore6('${hipCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
    `;
  
    // Remove a classe ativa para voltar ao estilo original
    card.classList.remove('active');}



    function showMore7(terapCard) {
      const card = document.getElementById(terapCard);
    
      // Remove a classe ativa de todos os cards
      document.querySelectorAll('.box').forEach((item) => {
          item.classList.remove('active');
      });
    
      // Atualiza o conteúdo do card usando innerHTML
      card.innerHTML = `
          <h3>Terapia de Partes</h3>
          <p>Integra e harmoniza diferentes aspectos internos, promovendo autoconhecimento e equilíbrio emocional no paciente.</p>
          <button class="btn" onclick="resetCard7('${terapCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
      `;
    
      // Adiciona a classe ativa para destacar o card
      card.classList.add('active');
    }
    
    function resetCard7(terapCard) {
      const card = document.getElementById(terapCard);
    
      // Volta o conteúdo inicial usando innerHTML
      card.innerHTML = `
          <img src="saude-mental.png">
          <h3>Terapia de Partes</h3>
          <p>Harmoniza aspectos da personalidade, promovendo compreensão e equilíbrio interno.</p>
      
          <button class="btn" onclick="showMore7('${terapCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
      `;
    
      // Remove a classe ativa para voltar ao estilo original
      card.classList.remove('active');}



      function showMore8(quiroCard) {
        const card = document.getElementById(quiroCard);
      
        // Remove a classe ativa de todos os cards
        document.querySelectorAll('.box').forEach((item) => {
            item.classList.remove('active');
        });
      
        // Atualiza o conteúdo do card usando innerHTML
        card.innerHTML = `
            <h3>Quiropraxia</h3>
            <p>Desbloqueio da cervical e descompressão da lombar. Ajuste de ombro, escapola, Patela ou joelhos e Punhos </p>
            <button class="btn" onclick="resetCard8('${quiroCard}')">Voltar <span class="fas fa-chevron-right"></span> </button>
        `;
      
        // Adiciona a classe ativa para destacar o card
        card.classList.add('active');
      }
      
      function resetCard8(quiroCard) {
        const card = document.getElementById(quiroCard);
      
        // Volta o conteúdo inicial usando innerHTML
        card.innerHTML = `
            <img src="quiropraxia.png">
            <h3>Quiropraxia</h3>
            <p>Medicina milenar que promove o ajuste completo da coluna e das articulações.</p>
        
            <button class="btn" onclick="showMore8('${quiroCard}')">Saiba mais <span class="fas fa-chevron-right"></span> </button>
        `;
      
        // Remove a classe ativa para voltar ao estilo original
        card.classList.remove('active');}
