/* ============================================
   MATH-GALING PRESENTATION — MAIN SCRIPT
   Navigation, Animations, Quiz Engine
   ============================================ */
;(function () {
  'use strict';
  // ========== CONFIG ==========
  // All presentation content is defined here for easy editing.
  const TOPICS = [
    {
      id: 'proper',
      icon: '🍰',
      title: {
        en: 'Subtracting a Proper Fraction from a Whole Number',
        tl: 'Pagsu-Subtract ng Proper Fraction mula sa Whole Number',
        bs: 'Pag-Subtract og Proper Fraction gikan sa Whole Number'
      },
      shortTitle: {
        en: 'Proper Fraction',
        tl: 'Proper Fraction',
        bs: 'Proper Fraction'
      },
      description: {
        en: 'Learn how to subtract a proper fraction from a whole number using borrowing!',
        tl: 'Alamin kung paano magbawas ng proper fraction sa isang whole number!',
        bs: 'Makat-on unsaon pag-minus sa proper fraction gikan sa whole number!'
      },
      slides: {
        en: [
          {
            title: 'Welcome, Math-Galing Experts! 🎉',
            icon: '🧮',
            content: `<p>Today, we are going to learn a very cool math trick: <strong>how to subtract a proper fraction from a whole number!</strong></p>
<p>We will find out what to do when a big whole number needs to share some of its parts.</p>
<p>Are you ready to become <strong>Math-Galing</strong> experts? Let's begin!</p>`
          },
          {
            title: 'The Story Problem 🍰',
            icon: '🎂',
            content: `<p>Imagine you have <strong>4 whole cakes</strong>. Your best friend eats <span class="math-expr"><sup>1</sup>&frasl;<sub>3</sub></span> of a cake.</p>
<p>How much cake do you have left?</p>
<div class="math-expr">4 − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = ?</div>
<p>🤔 But wait... the number 4 doesn't have a fraction! How can we take away <span class="fraction"><span class="num">1</span><span class="den">3</span></span> from nothing?</p>`
          },
          {
            title: 'The Magic Step: Borrowing ✨',
            icon: '🪄',
            content: `<p>Just like regular subtraction, we need to <strong>borrow!</strong> We will change the whole number 4 into a mixed number so it has a fraction helper.</p>
<div class="step-box">
  <div class="step-label">Step 1: Borrow 1 from the whole number</div>
  <p>If we take 1 away from 4, it becomes <strong>3</strong>.</p>
</div>
<div class="step-box step-green">
  <div class="step-label">Step 2: Turn that 1 into a fraction</div>
  <p>Look at the denominator of the fraction. The denominator is <strong>3</strong>. Since any number divided by itself equals 1, we write our borrowed 1 as <span class="fraction"><span class="num">3</span><span class="den">3</span></span>.</p>
</div>
<div class="step-box step-purple">
  <div class="step-label">Step 3: Write your new mixed number</div>
  <p>Now, our whole number <strong>4</strong> magically transforms into <strong>3 <span class="fraction"><span class="num">3</span><span class="den">3</span></span></strong>! ✨</p>
</div>`
          },
          {
            title: 'Time to Subtract! 🎯',
            icon: '✏️',
            content: `<p>Now that both numbers have fractions, we can solve it!</p>
<div class="math-expr">3 <span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = ?</div>
<div class="step-box step-orange">
  <div class="step-label">Step 4: Subtract the fractions</div>
  <p><span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = <span class="fraction"><span class="num">2</span><span class="den">3</span></span></p>
</div>
<div class="step-box step-red">
  <div class="step-label">Step 5: Put it all together</div>
  <p>Copy your remaining whole number <strong>3</strong>.</p>
</div>
<div class="answer-box">🎉 Final Answer: 3 <span class="fraction"><span class="num">2</span><span class="den">3</span></span> cakes left!</div>`
          },
          {
            title: "Teacher Math-Galing's Quick Tip 💡",
            icon: '👩‍🏫',
            content: `<div class="tip-box">
  <h3>💡 Remember This Trick!</h3>
  <p>Whenever you subtract a fraction from a whole number:</p>
  <div class="step-box">
    <p>1️⃣ <strong>Borrow 1</strong> from the whole number (4 becomes 3).</p>
  </div>
  <div class="step-box step-green">
    <p>2️⃣ <strong>Turn that 1 into a fraction</strong> using the same bottom number (1 becomes <span class="fraction"><span class="num">3</span><span class="den">3</span></span>).</p>
  </div>
  <div class="step-box step-purple">
    <p>3️⃣ <strong>Subtract the fractions</strong>: <span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = <span class="fraction"><span class="num">2</span><span class="den">3</span></span>.</p>
  </div>
  <div class="step-box step-orange">
    <p>4️⃣ <strong>Put it all together</strong>: 3 <span class="fraction"><span class="num">2</span><span class="den">3</span></span>.</p>
  </div>
</div>`
          }
        ],
        tl: [
          {
            title: 'Maligayang Pagdating, Math-Galing Experts! 🎉',
            icon: '🧮',
            content: `<p>Ngayong araw, may matututunan tayong napakagandang math trick: <strong>kung paano magbawas ng proper fraction sa isang whole number!</strong></p>
<p>Alamin natin kung ano ang gagawin kapag ang isang buong numero ay kailangang magbahagi ng kanyang mga piraso.</p>
<p>Handa na ba kayong maging mga <strong>Math-Galing</strong> experts? Simulan na natin!</p>`
          },
          {
            title: 'Ang Kuwentong Problema 🍰',
            icon: '🎂',
            content: `<p>Isipin mo na mayroon kang <strong>4 na buong cake</strong>. Kinain ng matalik mong kaibigan ang <span class="math-expr"><sup>1</sup>&frasl;<sub>3</sub></span> ng isang cake.</p>
<p>Gaano karaming cake ang natira sa iyo?</p>
<div class="math-expr">4 − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = ?</div>
<p>🤔 Pero... ang numerong 4 ay walang kasamang fraction! Paano tayo makakakuha ng <span class="fraction"><span class="num">1</span><span class="den">3</span></span> mula sa wala?</p>`
          },
          {
            title: 'Ang Mahiwagang Hakbang: Paghiram ✨',
            icon: '🪄',
            content: `<p>Gaya ng normal na pagbabawas, kailangan nating <strong>manghiram!</strong> Babaguhin natin ang whole number na 4 para maging isang mixed number.</p>
<div class="step-box">
  <div class="step-label">Hakbang 1: Manghiram ng 1 sa whole number</div>
  <p>Kapag nagbawas tayo ng 1 mula sa 4, ito ay magiging <strong>3</strong>.</p>
</div>
<div class="step-box step-green">
  <div class="step-label">Hakbang 2: Gawing fraction ang hiniram na 1</div>
  <p>Tingnan ang ilalim na numero (denominator) ng fraction. Ang denominator ay <strong>3</strong>. Dahil ang anumang numero na hinati sa sarili nito ay katumbas ng 1, isulat ang hiniram na 1 bilang <span class="fraction"><span class="num">3</span><span class="den">3</span></span>.</p>
</div>
<div class="step-box step-purple">
  <div class="step-label">Hakbang 3: Isulat ang bagong mixed number</div>
  <p>Ngayon, ang whole number na <strong>4</strong> ay mahiwagang nagbago at naging <strong>3 <span class="fraction"><span class="num">3</span><span class="den">3</span></span></strong>! ✨</p>
</div>`
          },
          {
            title: 'Oras na para mag-Subtract! 🎯',
            icon: '✏️',
            content: `<p>Dahil pareho nang may fraction ang dalawang numero, madali na nating masosolve ang problema:</p>
<div class="math-expr">3 <span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = ?</div>
<div class="step-box step-orange">
  <div class="step-label">Hakbang 4: Ibawas ang mga fraction</div>
  <p><span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = <span class="fraction"><span class="num">2</span><span class="den">3</span></span></p>
</div>
<div class="step-box step-red">
  <div class="step-label">Hakbang 5: Pagsamahin ang lahat</div>
  <p>Kopyahin ang natitirang whole number na <strong>3</strong>.</p>
</div>
<div class="answer-box">🎉 Tamang Sagot: 3 <span class="fraction"><span class="num">2</span><span class="den">3</span></span> na cake ang natira!</div>`
          },
          {
            title: 'Mabilis na Tip ni Teacher Math-Galing 💡',
            icon: '👩‍🏫',
            content: `<div class="tip-box">
  <h3>💡 Tandaan ang Trick na Ito!</h3>
  <p>Kapag nagsu-subtract ng fraction mula sa whole number:</p>
  <div class="step-box">
    <p>1️⃣ <strong>Manghiram ng 1</strong> sa whole number (4 → 3).</p>
  </div>
  <div class="step-box step-green">
    <p>2️⃣ <strong>Gawing fraction ang 1</strong> gamit ang parehong denominator (1 → <span class="fraction"><span class="num">3</span><span class="den">3</span></span>).</p>
  </div>
  <div class="step-box step-purple">
    <p>3️⃣ <strong>Ibawas ang fraction</strong>: <span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = <span class="fraction"><span class="num">2</span><span class="den">3</span></span>.</p>
  </div>
  <div class="step-box step-orange">
    <p>4️⃣ <strong>Pagsamahin</strong>: 3 <span class="fraction"><span class="num">2</span><span class="den">3</span></span>.</p>
  </div>
</div>`
          }
        ],
        bs: [
          {
            title: 'Welcome, Math-Galing Experts! 🎉',
            icon: '🧮',
            content: `<p>Karong adlawa, duna tay makat-onan nga astig kaayo nga math trick: <strong>unsaon pag-minus sa proper fraction gikan sa usa ka whole number!</strong></p>
<p>Atong sayron kung unsa ang angay buhaton kung ang usa ka tibuok nga numero kinahanglan nga mokuha og pipila ka parte sa iyang kaugalingon.</p>
<p>Ready na ba mo nga mahimong mga <strong>Math-Galing</strong> experts? Sugdan na nato!</p>`
          },
          {
            title: 'Ang Story Problem 🍰',
            icon: '🎂',
            content: `<p>Imadyina nga duna kay <strong>4 ka tibuok nga cake</strong>. Ang imong suod nga higala nikaon og <span class="math-expr"><sup>1</sup>&frasl;<sub>3</sub></span> sa usa ka cake.</p>
<p>Pila na lang ka cake ang nabilin nimo?</p>
<div class="math-expr">4 − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = ?</div>
<p>🤔 Pero... ang numero 4 walay kauban nga fraction! Unsaon man nato pagkuha og <span class="fraction"><span class="num">1</span><span class="den">3</span></span> gikan sa wala?</p>`
          },
          {
            title: 'Ang Milagrong Lakang: Paghulam ✨',
            icon: '🪄',
            content: `<p>Pareha sa naandan nga pag-minus, kinahanglan ta <strong>mohulam!</strong> Atong usbon ang whole number nga 4 aron mahimo kining mixed number.</p>
<div class="step-box">
  <div class="step-label">Pamaagi 1: Mohulam og 1 gikan sa whole number</div>
  <p>Kung magkuha ta og 1 gikan sa 4, mahimo na lang kining <strong>3</strong>.</p>
</div>
<div class="step-box step-green">
  <div class="step-label">Pamaagi 2: Himuong fraction ang gihulaman nga 1</div>
  <p>Tan-awa ang numero sa ubos (denominator). Ang denominator kay <strong>3</strong>. Tungod kay ang bisan unsang numero nga bahinon sa iyang kaugalingon katumbas man sa 1, isulat ang gihulaman nga 1 isip <span class="fraction"><span class="num">3</span><span class="den">3</span></span>.</p>
</div>
<div class="step-box step-purple">
  <div class="step-label">Pamaagi 3: Isulat ang bag-ong mixed number</div>
  <p>Karon, ang tibuok nga numero nga <strong>4</strong> milagro nga nausab ug nahimong <strong>3 <span class="fraction"><span class="num">3</span><span class="den">3</span></span></strong>! ✨</p>
</div>`
          },
          {
            title: 'Oras na para Mag-minus! 🎯',
            icon: '✏️',
            content: `<p>Tungod kay duna nay fraction ang duha ka numero, dali na kaayo solbaron ang problema:</p>
<div class="math-expr">3 <span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = ?</div>
<div class="step-box step-orange">
  <div class="step-label">Pamaagi 4: I-minus ang mga fraction</div>
  <p><span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = <span class="fraction"><span class="num">2</span><span class="den">3</span></span></p>
</div>
<div class="step-box step-red">
  <div class="step-label">Pamaagi 5: Itipon ang tanan</div>
  <p>Kopyahon ang nabilin nga whole number nga <strong>3</strong>.</p>
</div>
<div class="answer-box">🎉 Saktong Tubag: 3 <span class="fraction"><span class="num">2</span><span class="den">3</span></span> ka cake ang nabilin!</div>`
          },
          {
            title: 'Quick Tip ni Teacher Math-Galing 💡',
            icon: '👩‍🏫',
            content: `<div class="tip-box">
  <h3>💡 Hinumdumi Kini nga Trick!</h3>
  <p>Kung mag-minus og fraction gikan sa whole number:</p>
  <div class="step-box">
    <p>1️⃣ <strong>Mohulam og 1</strong> gikan sa whole number (4 → 3).</p>
  </div>
  <div class="step-box step-green">
    <p>2️⃣ <strong>Himua og fraction ang 1</strong> gamit ang pareho nga denominator (1 → <span class="fraction"><span class="num">3</span><span class="den">3</span></span>).</p>
  </div>
  <div class="step-box step-purple">
    <p>3️⃣ <strong>I-minus ang fraction</strong>: <span class="fraction"><span class="num">3</span><span class="den">3</span></span> − <span class="fraction"><span class="num">1</span><span class="den">3</span></span> = <span class="fraction"><span class="num">2</span><span class="den">3</span></span>.</p>
  </div>
  <div class="step-box step-orange">
    <p>4️⃣ <strong>Itipon tanan</strong>: 3 <span class="fraction"><span class="num">2</span><span class="den">3</span></span>.</p>
  </div>
</div>`
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'What is the first step when subtracting a fraction from a whole number?',
            options: ['Subtract the denominators', 'Borrow 1 from the whole number', 'Multiply both numbers', 'Add the fractions'],
            answer: 1
          },
          {
            question: 'If you borrow 1 from 5, what does 5 become?',
            options: ['6', '3', '4', '5'],
            answer: 2
          },
          {
            question: 'If the denominator is 4, what fraction does the borrowed 1 become?',
            options: ['1/4', '4/4', '4/1', '1/1'],
            answer: 1
          },
          {
            question: 'What is 5 − 2/5?',
            options: ['4 2/5', '3 3/5', '4 3/5', '5 2/5'],
            answer: 2
          },
          {
            question: 'What is 3 − 1/6?',
            options: ['2 5/6', '2 1/6', '3 5/6', '1 5/6'],
            answer: 0
          }
        ],
        tl: [
          {
            question: 'Ano ang unang hakbang kapag nagsu-subtract ng fraction mula sa whole number?',
            options: ['Ibawas ang mga denominator', 'Manghiram ng 1 sa whole number', 'I-multiply ang dalawang numero', 'Idagdag ang mga fraction'],
            answer: 1
          },
          {
            question: 'Kung manghiram ka ng 1 sa 5, ano ang magiging 5?',
            options: ['6', '3', '4', '5'],
            answer: 2
          },
          {
            question: 'Kung ang denominator ay 4, anong fraction ang magiging hiniram na 1?',
            options: ['1/4', '4/4', '4/1', '1/1'],
            answer: 1
          },
          {
            question: 'Ano ang 5 − 2/5?',
            options: ['4 2/5', '3 3/5', '4 3/5', '5 2/5'],
            answer: 2
          },
          {
            question: 'Ano ang 3 − 1/6?',
            options: ['2 5/6', '2 1/6', '3 5/6', '1 5/6'],
            answer: 0
          }
        ],
        bs: [
          {
            question: 'Unsa ang unang lakang kung mag-minus og fraction gikan sa whole number?',
            options: ['I-minus ang mga denominator', 'Mohulam og 1 gikan sa whole number', 'I-multiply ang duha ka numero', 'Idugang ang mga fraction'],
            answer: 1
          },
          {
            question: 'Kung mohulam ka og 1 gikan sa 5, unsa ang mahimong 5?',
            options: ['6', '3', '4', '5'],
            answer: 2
          },
          {
            question: 'Kung ang denominator kay 4, unsang fraction ang mahimong gihulaman nga 1?',
            options: ['1/4', '4/4', '4/1', '1/1'],
            answer: 1
          },
          {
            question: 'Unsa ang 5 − 2/5?',
            options: ['4 2/5', '3 3/5', '4 3/5', '5 2/5'],
            answer: 2
          },
          {
            question: 'Unsa ang 3 − 1/6?',
            options: ['2 5/6', '2 1/6', '3 5/6', '1 5/6'],
            answer: 0
          }
        ]
      }
    },
    {
      id: 'mixed',
      icon: '🍕',
      title: {
        en: 'Subtracting a Mixed Number from a Whole Number',
        tl: 'Pagsu-Subtract ng Mixed Number mula sa Whole Number',
        bs: 'Pag-Subtract og Mixed Number gikan sa Whole Number'
      },
      shortTitle: {
        en: 'Mixed Number',
        tl: 'Mixed Number',
        bs: 'Mixed Number'
      },
      description: {
        en: 'Master subtracting a mixed number from a whole number with the borrowing trick!',
        tl: 'Matuto mag-subtract ng mixed number mula sa whole number gamit ang borrowing!',
        bs: 'Makat-on pag-minus og mixed number gikan sa whole number gamit ang paghulam!'
      },
      slides: {
        en: [
          {
            title: 'A New Challenge Awaits! 🚀',
            icon: '🧮',
            content: `<p>Today, we are going to learn a very cool math trick: <strong>how to subtract a whole number from a mixed number!</strong></p>
<p>We will find out what to do when a big whole number needs to share some of its parts.</p>
<p>Are you ready to become <strong>Math-Galing</strong> experts? Let's begin!</p>`
          },
          {
            title: 'The Pizza Problem 🍕',
            icon: '🍕',
            content: `<p>Imagine you have <strong>7 whole pizzas</strong>. Your friends eat <strong>2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span></strong> pizzas.</p>
<p>How much pizza do you have left?</p>
<div class="math-expr">7 − 2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span> = ?</div>
<p>🤔 We want to subtract the fractions first, but the number 7 doesn't have a fraction attached to it! How can we take away <span class="fraction"><span class="num">1</span><span class="den">8</span></span> from nothing?</p>`
          },
          {
            title: 'Borrowing and Regrouping ✨',
            icon: '🪄',
            content: `<p>Just like regular subtraction, we need to <strong>borrow!</strong> We will change the whole number 7 into a mixed number so it has a fraction helper.</p>
<div class="step-box">
  <div class="step-label">Step 1: Borrow 1 from the whole number</div>
  <p>If we take 1 away from 7, it becomes <strong>6</strong>.</p>
</div>
<div class="step-box step-green">
  <div class="step-label">Step 2: Turn that 1 into a fraction</div>
  <p>Look at the denominator of the other fraction. The denominator is <strong>8</strong>. Since any number divided by itself equals 1, we write our borrowed 1 as <span class="fraction"><span class="num">8</span><span class="den">8</span></span>.</p>
</div>
<div class="step-box step-purple">
  <div class="step-label">Step 3: Write your new mixed number</div>
  <p>Now, our whole number <strong>7</strong> magically transforms into <strong>6 <span class="fraction"><span class="num">8</span><span class="den">8</span></span></strong>! ✨</p>
</div>`
          },
          {
            title: 'Time to Subtract! 🎯',
            icon: '✏️',
            content: `<p>Now that both numbers have fractions, we can solve the problem easily:</p>
<div class="math-expr">6 <span class="fraction"><span class="num">8</span><span class="den">8</span></span> − 2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span> = ?</div>
<div class="step-box step-orange">
  <div class="step-label">Step 4: Subtract the fractions</div>
  <p>Look only at the numerators (top numbers): 8 − 1 = 7. Keep the denominator the same: 8.</p>
  <p>So, our fraction part is <span class="fraction"><span class="num">7</span><span class="den">8</span></span>.</p>
</div>
<div class="step-box step-red">
  <div class="step-label">Step 5: Subtract the whole numbers</div>
  <p>Now subtract the big numbers: 6 − 2 = <strong>4</strong>.</p>
</div>
<div class="answer-box">🎉 Final Answer: You have 4 <span class="fraction"><span class="num">7</span><span class="den">8</span></span> pizzas left!</div>`
          },
          {
            title: "Teacher Math-Galing's Quick Tip 💡",
            icon: '👩‍🏫',
            content: `<div class="tip-box">
  <h3>💡 The Denominator is Your Guide!</h3>
  <p>Always look at the bottom number (denominator) of the fraction you are subtracting. That bottom number tells you exactly what your borrowed fraction should look like!</p>
  <div class="step-box">
    <p>If the denominator is <strong>5</strong>, your whole number borrows and turns into <span class="fraction"><span class="num">5</span><span class="den">5</span></span>.</p>
  </div>
  <div class="step-box step-green">
    <p>If the denominator is <strong>8</strong>, it turns into <span class="fraction"><span class="num">8</span><span class="den">8</span></span>.</p>
  </div>
  <div class="step-box step-purple">
    <p>If the denominator is <strong>10</strong>, it turns into <span class="fraction"><span class="num">10</span><span class="den">10</span></span>.</p>
  </div>
</div>`
          }
        ],
        tl: [
          {
            title: 'Bagong Hamon! 🚀',
            icon: '🧮',
            content: `<p>Ngayong araw ay may matututuhan tayong napakagandang math trick: <strong>kung paano mag-subtract ng mixed number mula sa isang whole number!</strong></p>
<p>Alamin natin kung ano ang gagawin kapag ang isang buong numero ay kailangan nating hatiin.</p>
<p>Handa na ba kayong maging <strong>Math-Galing</strong> experts? Simulan na natin!</p>`
          },
          {
            title: 'Ang Problemang Pizza 🍕',
            icon: '🍕',
            content: `<p>Isipin mo na mayroon kang <strong>7 na buong pizza</strong>. Kinain ng mga kaibigan mo ang <strong>2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span></strong> na pizza.</p>
<p>Gaano karaming pizza ang natira sa iyo?</p>
<div class="math-expr">7 − 2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span> = ?</div>
<p>🤔 Gusto nating ibawas muna ang mga fraction, pero ang numerong 7 ay walang kasamang fraction! Paano natin babawasan ng <span class="fraction"><span class="num">1</span><span class="den">8</span></span> ang wala naman doon?</p>`
          },
          {
            title: 'Ang Mahiwagang Hakbang: Paghiram ✨',
            icon: '🪄',
            content: `<p>Gaya ng normal na subtraction, kailangan nating <strong>manghiram!</strong> Gagawin nating mixed number ang buong numerong 7.</p>
<div class="step-box">
  <div class="step-label">Hakbang 1: Manghiram ng 1 sa buong numero</div>
  <p>Kapag nagbawas tayo ng 1 sa 7, magiging <strong>6</strong> ito.</p>
</div>
<div class="step-box step-green">
  <div class="step-label">Hakbang 2: Gawing fraction ang hiniram na 1</div>
  <p>Tingnan ang ilalim na numero (denominator). Ang denominator ay <strong>8</strong>. Isusulat natin ang hiniram na 1 bilang <span class="fraction"><span class="num">8</span><span class="den">8</span></span>.</p>
</div>
<div class="step-box step-purple">
  <div class="step-label">Hakbang 3: Isulat ang bagong mixed number</div>
  <p>Ngayon, ang buong numerong <strong>7</strong> ay mahiwagang naging <strong>6 <span class="fraction"><span class="num">8</span><span class="den">8</span></span></strong>! ✨</p>
</div>`
          },
          {
            title: 'Oras na para mag-Subtract! 🎯',
            icon: '✏️',
            content: `<p>Dahil pareho nang may fraction ang dalawang numero, madali na natin itong masasagutan:</p>
<div class="math-expr">6 <span class="fraction"><span class="num">8</span><span class="den">8</span></span> − 2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span> = ?</div>
<div class="step-box step-orange">
  <div class="step-label">Hakbang 4: I-subtract ang mga fraction</div>
  <p>Tingnan lang ang mga numerator: 8 − 1 = 7. Kopyahin ang denominator: 8.</p>
  <p>Kaya ang ating fraction ay <span class="fraction"><span class="num">7</span><span class="den">8</span></span>.</p>
</div>
<div class="step-box step-red">
  <div class="step-label">Hakbang 5: I-subtract ang mga buong numero</div>
  <p>Ibawas ang mga malalaking numero: 6 − 2 = <strong>4</strong>.</p>
</div>
<div class="answer-box">🎉 Tamang Sagot: Mayroon kang 4 <span class="fraction"><span class="num">7</span><span class="den">8</span></span> na pizza na natira!</div>`
          },
          {
            title: 'Mabilis na Tip ni Teacher Math-Galing 💡',
            icon: '👩‍🏫',
            content: `<div class="tip-box">
  <h3>💡 Ang Denominator ang Iyong Gabay!</h3>
  <p>Laging tingnan ang ilalim na numero (denominator) ng fraction na ibabawas. Ito ang magsasabi kung ano ang magiging hitsura ng hiniram na fraction!</p>
  <div class="step-box">
    <p>Kung ang denominator ay <strong>5</strong>, magiging <span class="fraction"><span class="num">5</span><span class="den">5</span></span>.</p>
  </div>
  <div class="step-box step-green">
    <p>Kung ang denominator ay <strong>8</strong>, magiging <span class="fraction"><span class="num">8</span><span class="den">8</span></span>.</p>
  </div>
  <div class="step-box step-purple">
    <p>Kung ang denominator ay <strong>10</strong>, magiging <span class="fraction"><span class="num">10</span><span class="den">10</span></span>.</p>
  </div>
</div>`
          }
        ],
        bs: [
          {
            title: 'Bag-ong Hagit! 🚀',
            icon: '🧮',
            content: `<p>Karong adlawa, duna tay tun-an nga nindot kaayo nga math trick: <strong>unsaon pag-subtract og mixed number gikan sa tibuok numero!</strong></p>
<p>Atong susihon kung unsa ang angay buhaton kung ang usa ka tibuok numero kinahanglan nato pahuwaman.</p>
<p>Ready na ba mo mahimong <strong>Math-Galing</strong> experts? Sugdan na nato!</p>`
          },
          {
            title: 'Ang Pizza Problem 🍕',
            icon: '🍕',
            content: `<p>Hunahunaa nga naa kay <strong>7 ka tibuok pizza</strong>. Gikaon sa imong mga higala ang <strong>2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span></strong> ka pizza.</p>
<p>Pila na lang ka pizza ang nabilin nimo?</p>
<div class="math-expr">7 − 2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span> = ?</div>
<p>🤔 Gusto unta nato nga unahon pag-subtract ang fraction, pero ang numero 7 walay kaubang fraction! Unsaon man nato pagkuha sa <span class="fraction"><span class="num">1</span><span class="den">8</span></span> kung wala may makuhaan?</p>`
          },
          {
            title: 'Ang Milagrong Lakang: Paghulam ✨',
            icon: '🪄',
            content: `<p>Parehas sa normal nga subtraction, kinahanglan mag-hulam ta! Atong usbon ang tibuok numero nga 7 para mahimong mixed number.</p>
<div class="step-box">
  <div class="step-label">Pamaagi 1: Mohulam og 1 gikan sa tibuok numero</div>
  <p>Kung magkuha tag 1 gikan sa 7, mahimo kining <strong>6</strong>.</p>
</div>
<div class="step-box step-green">
  <div class="step-label">Pamaagi 2: Himoon og fraction ang gihulam nga 1</div>
  <p>Tan-awa ang denominator. Ang denominator kay <strong>8</strong>. Isulat ang gihulam nga 1 isip <span class="fraction"><span class="num">8</span><span class="den">8</span></span>.</p>
</div>
<div class="step-box step-purple">
  <div class="step-label">Pamaagi 3: Isulat ang bag-ong mixed number</div>
  <p>Karon, ang tibuok numero nga <strong>7</strong> nausab na ug nahimo nang <strong>6 <span class="fraction"><span class="num">8</span><span class="den">8</span></span></strong>! ✨</p>
</div>`
          },
          {
            title: 'Oras na sa Pag-subtract! 🎯',
            icon: '✏️',
            content: `<p>Tungod kay duna nay fraction ang duha ka numero, dali na kaayo ni sulbaron:</p>
<div class="math-expr">6 <span class="fraction"><span class="num">8</span><span class="den">8</span></span> − 2 <span class="fraction"><span class="num">1</span><span class="den">8</span></span> = ?</div>
<div class="step-box step-orange">
  <div class="step-label">Pamaagi 4: I-subtract ang mga fraction</div>
  <p>Numerator: 8 − 1 = 7. Kopyaha ang denominator: 8.</p>
  <p>Ang atong fraction kay <span class="fraction"><span class="num">7</span><span class="den">8</span></span>.</p>
</div>
<div class="step-box step-red">
  <div class="step-label">Pamaagi 5: I-subtract ang mga tibuok numero</div>
  <p>Minusahi: 6 − 2 = <strong>4</strong>.</p>
</div>
<div class="answer-box">🎉 Saktong Tubag: Naa kay 4 <span class="fraction"><span class="num">7</span><span class="den">8</span></span> ka pizza nga nabilin!</div>`
          },
          {
            title: 'Quick Tip ni Teacher Math-Galing 💡',
            icon: '👩‍🏫',
            content: `<div class="tip-box">
  <h3>💡 Ang Denominator ang Imong Giya!</h3>
  <p>Kanunay tan-awa ang numero sa ubos (denominator). Kini ang mosulti nimo unsay porma sa imong gihulaman nga fraction!</p>
  <div class="step-box">
    <p>Kung ang denominator kay <strong>5</strong>, mahimong <span class="fraction"><span class="num">5</span><span class="den">5</span></span>.</p>
  </div>
  <div class="step-box step-green">
    <p>Kung ang denominator kay <strong>8</strong>, mahimong <span class="fraction"><span class="num">8</span><span class="den">8</span></span>.</p>
  </div>
  <div class="step-box step-purple">
    <p>Kung ang denominator kay <strong>10</strong>, mahimong <span class="fraction"><span class="num">10</span><span class="den">10</span></span>.</p>
  </div>
</div>`
          }
        ]
      },
      quiz: {
        en: [
          {
            question: 'In 7 − 2 1/8, what does 7 become after borrowing?',
            options: ['7 8/8', '6 8/8', '6 1/8', '5 8/8'],
            answer: 1
          },
          {
            question: 'Why do we use 8/8 for the borrowed fraction when subtracting 2 1/8?',
            options: ['Because 8 is a lucky number', 'Because the denominator of the fraction is 8', 'Because 8 is bigger than 7', 'Because we always use 8'],
            answer: 1
          },
          {
            question: 'What is 7 − 2 1/8?',
            options: ['5 7/8', '4 7/8', '5 1/8', '4 1/8'],
            answer: 1
          },
          {
            question: 'What is 10 − 3 2/5?',
            options: ['7 3/5', '6 3/5', '7 2/5', '6 2/5'],
            answer: 1
          },
          {
            question: 'If the denominator is 6, what does the borrowed 1 become?',
            options: ['1/6', '6/1', '6/6', '5/6'],
            answer: 2
          }
        ],
        tl: [
          {
            question: 'Sa 7 − 2 1/8, ano ang magiging 7 pagkatapos manghiram?',
            options: ['7 8/8', '6 8/8', '6 1/8', '5 8/8'],
            answer: 1
          },
          {
            question: 'Bakit ginagamit natin ang 8/8 sa hiniram na fraction kapag ibabawas ang 2 1/8?',
            options: ['Dahil lucky number ang 8', 'Dahil ang denominator ng fraction ay 8', 'Dahil mas malaki ang 8 sa 7', 'Dahil laging 8 ang ginagamit'],
            answer: 1
          },
          {
            question: 'Ano ang 7 − 2 1/8?',
            options: ['5 7/8', '4 7/8', '5 1/8', '4 1/8'],
            answer: 1
          },
          {
            question: 'Ano ang 10 − 3 2/5?',
            options: ['7 3/5', '6 3/5', '7 2/5', '6 2/5'],
            answer: 1
          },
          {
            question: 'Kung ang denominator ay 6, ano ang magiging hiniram na 1?',
            options: ['1/6', '6/1', '6/6', '5/6'],
            answer: 2
          }
        ],
        bs: [
          {
            question: 'Sa 7 − 2 1/8, unsa ang mahimong 7 human mohulam?',
            options: ['7 8/8', '6 8/8', '6 1/8', '5 8/8'],
            answer: 1
          },
          {
            question: 'Ngano gamiton nato ang 8/8 sa gihulaman kung mag-minus og 2 1/8?',
            options: ['Tungod lucky number ang 8', 'Tungod ang denominator sa fraction kay 8', 'Tungod mas dako ang 8 sa 7', 'Tungod kanunay 8 ang gamiton'],
            answer: 1
          },
          {
            question: 'Unsa ang 7 − 2 1/8?',
            options: ['5 7/8', '4 7/8', '5 1/8', '4 1/8'],
            answer: 1
          },
          {
            question: 'Unsa ang 10 − 3 2/5?',
            options: ['7 3/5', '6 3/5', '7 2/5', '6 2/5'],
            answer: 1
          },
          {
            question: 'Kung ang denominator kay 6, unsa ang mahimong gihulaman nga 1?',
            options: ['1/6', '6/1', '6/6', '5/6'],
            answer: 2
          }
        ]
      }
    }
  ];
  // UI Text translations
  const UI_TEXT = {
    en: {
      home: 'Home',
      topics: 'Topics',
      quiz: 'Quiz',
      heroTitle: 'Math-Galing: Fraction Subtraction',
      heroSubtitle: 'An interactive presentation about subtracting fractions from whole numbers — learn the borrowing trick!',
      startBtn: "Let's Start! 🚀",
      chooseTopicTitle: '📚 Choose a Topic',
      prev: '← Previous',
      next: 'Next →',
      backToTopics: '← Back to Topics',
      takeQuiz: 'Take the Quiz! 📝',
      quizTitle: '📝 Quiz Time!',
      quizOf: 'of',
      nextQuestion: 'Next Question →',
      seeResults: 'See Results 🎉',
      correctMsg: '✅ Correct! Great job!',
      wrongMsg: '❌ Not quite. The correct answer is: ',
      resultsTitle: 'Quiz Results',
      excellentMsg: '🌟 Outstanding! You are a true Math-Galing expert!',
      goodMsg: '👍 Good job! Review the lesson and try again!',
      needsWorkMsg: '📖 Keep practicing! You\'ll get better!',
      retryQuiz: 'Retry Quiz 🔄',
      backHome: '← Back Home',
      offline: '⚡ Offline'
    },
    tl: {
      home: 'Home',
      topics: 'Mga Paksa',
      quiz: 'Pagsusulit',
      heroTitle: 'Math-Galing: Pagbabawas ng Fraction',
      heroSubtitle: 'Isang interactive na presentasyon tungkol sa pagbabawas ng fraction mula sa whole number — alamin ang borrowing trick!',
      startBtn: 'Simulan Na! 🚀',
      chooseTopicTitle: '📚 Pumili ng Paksa',
      prev: '← Nakaraan',
      next: 'Susunod →',
      backToTopics: '← Bumalik sa Mga Paksa',
      takeQuiz: 'Sulitin Na! 📝',
      quizTitle: '📝 Oras ng Pagsusulit!',
      quizOf: 'sa',
      nextQuestion: 'Susunod na Tanong →',
      seeResults: 'Tignan ang Resulta 🎉',
      correctMsg: '✅ Tama! Magaling!',
      wrongMsg: '❌ Hindi tama. Ang tamang sagot ay: ',
      resultsTitle: 'Resulta ng Pagsusulit',
      excellentMsg: '🌟 Napakahusay! Ikaw ay tunay na Math-Galing expert!',
      goodMsg: '👍 Magaling! Balikan ang aralin at subukan ulit!',
      needsWorkMsg: '📖 Mag-practice pa! Kaya mo yan!',
      retryQuiz: 'Ulitin ang Pagsusulit 🔄',
      backHome: '← Bumalik sa Home',
      offline: '⚡ Offline'
    },
    bs: {
      home: 'Home',
      topics: 'Mga Hilisgutan',
      quiz: 'Pagsulay',
      heroTitle: 'Math-Galing: Pag-minus sa Fraction',
      heroSubtitle: 'Usa ka interactive nga presentasyon bahin sa pag-minus sa fraction gikan sa whole number — makat-on sa paghulam nga trick!',
      startBtn: 'Sugod Na! 🚀',
      chooseTopicTitle: '📚 Pagpili og Hilisgutan',
      prev: '← Kaniadto',
      next: 'Sunod →',
      backToTopics: '← Balik sa Mga Hilisgutan',
      takeQuiz: 'Sultihi Na! 📝',
      quizTitle: '📝 Oras sa Pagsulay!',
      quizOf: 'sa',
      nextQuestion: 'Sunod nga Pangutana →',
      seeResults: 'Tan-awa ang Resulta 🎉',
      correctMsg: '✅ Sakto! Nindot kaayo!',
      wrongMsg: '❌ Dili sakto. Ang saktong tubag kay: ',
      resultsTitle: 'Resulta sa Pagsulay',
      excellentMsg: '🌟 Nindot kaayo! Tinuod ka nga Math-Galing expert!',
      goodMsg: '👍 Maayo! Baliki ang leksyon ug sulayi pag-usab!',
      needsWorkMsg: '📖 Padayon og practice! Makaya ra nimo!',
      retryQuiz: 'Sultihi Pag-usab 🔄',
      backHome: '← Balik sa Home',
      offline: '⚡ Offline'
    }
  };
  // ========== STATE ==========
  let currentLang = 'en';
  let currentSection = 'home';
  let currentTopicIndex = null;
  let currentSlide = 0;
  let quizState = { current: 0, answers: [], answered: false };
  // ========== DOM REFERENCES ==========
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => [...(ctx || document).querySelectorAll(sel)];
  // ========== INITIALIZATION ==========
  document.addEventListener('DOMContentLoaded', init);
  function init() {
    registerServiceWorker();
    buildBackground();
    bindEvents();
    renderSection('home');
    updateLangButtons();
    handleOfflineStatus();
  }
  // ========== SERVICE WORKER ==========
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }
  // ========== OFFLINE STATUS ==========
  function handleOfflineStatus() {
    const update = () => document.body.classList.toggle('offline', !navigator.onLine);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    update();
  }
  // ========== ANIMATED BACKGROUND ==========
  function buildBackground() {
    const container = $('.bg-animation');
    if (!container) return;
    const symbols = ['➕', '➖', '✖️', '➗', '🔢', '📐', '📏', '🧮', '⭐', '💡', '🎯', '🏆',
      '¼', '½', '¾', '⅓', '⅔', '⅛', 'π', '∑', '∞', '√'];
    for (let i = 0; i < 25; i++) {
      const el = document.createElement('span');
      el.className = 'floating-shape';
      el.textContent = symbols[i % symbols.length];
      el.style.left = Math.random() * 95 + '%';
      el.style.top = Math.random() * 95 + '%';
      el.style.animationDelay = (Math.random() * 15) + 's';
      el.style.animationDuration = (15 + Math.random() * 20) + 's';
      el.style.fontSize = (1.5 + Math.random() * 2.5) + 'rem';
      container.appendChild(el);
    }
  }
  // ========== EVENT BINDING ==========
  function bindEvents() {
    // Hamburger menu
    const hamburger = $('.hamburger');
    const navLinks = $('.nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
    }
    // Nav links
    $$('[data-nav]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const section = a.dataset.nav;
        if (navLinks) navLinks.classList.remove('open');
        if (section === 'quiz') {
          if (currentTopicIndex !== null) {
            renderSection('quiz');
          } else {
            renderSection('topics');
          }
        } else {
          renderSection(section);
        }
      });
    });
    // Language buttons
    $$('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentLang = btn.dataset.lang;
        updateLangButtons();
        renderSection(currentSection);
      });
    });
    // Scroll to top
    const scrollBtn = $('.scroll-top');
    if (scrollBtn) {
      window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('visible', window.scrollY > 300);
      });
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (currentSection === 'presentation') {
        if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    });
  }
  // ========== LANGUAGE ==========
  function updateLangButtons() {
    $$('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === currentLang);
    });
  }
  function t(key) {
    return (UI_TEXT[currentLang] && UI_TEXT[currentLang][key]) || UI_TEXT.en[key] || key;
  }
  // ========== NAVIGATION ==========
  function updateNav(section) {
    $$('[data-nav]').forEach(a => {
      a.classList.toggle('active', a.dataset.nav === section);
    });
  }
  // ========== SECTIONS ==========
  function renderSection(section) {
    currentSection = section;
    updateNav(section);
    const main = $('main');
    if (!main) return;
    // Remove all dynamic sections
    $$('.section', main).forEach(s => s.remove());
    let html = '';
    switch (section) {
      case 'home':
        html = renderHome();
        break;
      case 'topics':
        html = renderTopics();
        break;
      case 'presentation':
        html = renderPresentation();
        break;
      case 'quiz':
        quizState = { current: 0, answers: [], answered: false };
        html = renderQuiz();
        break;
      default:
        html = renderHome();
    }
    const div = document.createElement('div');
    div.innerHTML = html;
    const sectionEl = div.firstElementChild;
    main.appendChild(sectionEl);
    // Bind section-specific events after rendering
    bindSectionEvents(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function bindSectionEvents(section) {
    switch (section) {
      case 'home':
        const startBtn = $('.cta-btn');
        if (startBtn) startBtn.addEventListener('click', () => renderSection('topics'));
        break;
      case 'topics':
        $$('.topic-card').forEach((card, i) => {
          card.addEventListener('click', () => {
            currentTopicIndex = i;
            currentSlide = 0;
            renderSection('presentation');
          });
        });
        break;
      case 'presentation':
        bindSlideEvents();
        break;
      case 'quiz':
        bindQuizEvents();
        break;
    }
  }
  // ========== HOME ==========
  function renderHome() {
    return `
      <section class="section active">
        <div class="hero">
          <div class="hero-mascot">🧮</div>
          <h1>${t('heroTitle')}</h1>
          <p class="subtitle">${t('heroSubtitle')}</p>
          <button class="btn btn-primary cta-btn">${t('startBtn')}</button>
        </div>
      </section>`;
  }
  // ========== TOPICS ==========
  function renderTopics() {
    const cards = TOPICS.map((topic, i) => `
      <div class="topic-card" data-topic="${i}">
        <span class="topic-icon">${topic.icon}</span>
        <h3>${topic.title[currentLang] || topic.title.en}</h3>
        <p>${topic.description[currentLang] || topic.description.en}</p>
      </div>`).join('');
    return `
      <section class="section active">
        <div class="hero" style="min-height:auto; padding-bottom:0;">
          <h1>${t('chooseTopicTitle')}</h1>
        </div>
        <div class="topic-grid">${cards}</div>
      </section>`;
  }
  // ========== PRESENTATION ==========
  function renderPresentation() {
    if (currentTopicIndex === null) return renderTopics();
    const topic = TOPICS[currentTopicIndex];
    const slides = topic.slides[currentLang] || topic.slides.en;
    const total = slides.length;
    const slidesHtml = slides.map((slide, i) => `
      <div class="slide ${i === currentSlide ? 'active' : ''}" data-slide="${i}">
        <div class="slide-card">
          <span class="slide-number">${i + 1}</span>
          <div class="emoji-icon">${slide.icon}</div>
          <h2>${slide.title}</h2>
          ${slide.content}
        </div>
      </div>`).join('');
    const progress = ((currentSlide + 1) / total) * 100;
    const isLast = currentSlide === total - 1;
    return `
      <section class="section active">
        <div class="slides-container">
          ${slidesHtml}
        </div>
        <div class="slide-nav">
          <button class="btn btn-secondary slide-prev" ${currentSlide === 0 ? 'style="visibility:hidden"' : ''}>${t('prev')}</button>
          <div style="flex:1;text-align:center;">
            <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
            <span class="slide-counter">${currentSlide + 1} ${t('quizOf')} ${total}</span>
          </div>
          ${isLast
            ? `<button class="btn btn-success slide-quiz">${t('takeQuiz')}</button>`
            : `<button class="btn btn-primary slide-next">${t('next')}</button>`
          }
        </div>
        <div style="text-align:center;margin-top:1rem;">
          <button class="btn btn-secondary back-topics-btn">${t('backToTopics')}</button>
        </div>
      </section>`;
  }
  function bindSlideEvents() {
    const prevBtn = $('.slide-prev');
    const nextBtn = $('.slide-next');
    const quizBtn = $('.slide-quiz');
    const backBtn = $('.back-topics-btn');
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (quizBtn) quizBtn.addEventListener('click', () => renderSection('quiz'));
    if (backBtn) backBtn.addEventListener('click', () => {
      currentTopicIndex = null;
      renderSection('topics');
    });
  }
  function nextSlide() {
    if (currentTopicIndex === null) return;
    const topic = TOPICS[currentTopicIndex];
    const slides = topic.slides[currentLang] || topic.slides.en;
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      renderSection('presentation');
    }
  }
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      renderSection('presentation');
    }
  }
  // ========== QUIZ ==========
  function renderQuiz() {
    if (currentTopicIndex === null) return renderTopics();
    const topic = TOPICS[currentTopicIndex];
    const questions = topic.quiz[currentLang] || topic.quiz.en;
    const total = questions.length;
    // Show results if all answered
    if (quizState.answers.length === total) {
      return renderQuizResults(questions);
    }
    const q = questions[quizState.current];
    const letters = ['A', 'B', 'C', 'D'];
    const dots = questions.map((_, i) => {
      let cls = 'quiz-dot';
      if (i === quizState.current) cls += ' current';
      else if (i < quizState.answers.length) {
        cls += quizState.answers[i] === questions[i].answer ? ' correct' : ' wrong';
      }
      return `<div class="${cls}"></div>`;
    }).join('');
    const options = q.options.map((opt, i) => `
      <button class="quiz-option" data-option="${i}">
        <span class="option-letter">${letters[i]}</span>
        <span>${opt}</span>
      </button>`).join('');
    return `
      <section class="section active">
        <div class="quiz-container">
          <div class="quiz-header">
            <h2>${t('quizTitle')}</h2>
            <p>${topic.shortTitle[currentLang] || topic.shortTitle.en}</p>
            <div class="quiz-progress">${dots}</div>
            <span class="slide-counter">${quizState.current + 1} ${t('quizOf')} ${total}</span>
          </div>
          <div class="quiz-question-card">
            <h3><span class="question-number">Q${quizState.current + 1}.</span> ${q.question}</h3>
            <div class="quiz-options">${options}</div>
            <div class="quiz-feedback-area"></div>
            <div class="quiz-nav" style="display:none">
              <button class="btn btn-primary quiz-next-btn">
                ${quizState.current < total - 1 ? t('nextQuestion') : t('seeResults')}
              </button>
            </div>
          </div>
        </div>
      </section>`;
  }
  function bindQuizEvents() {
    $$('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => handleQuizAnswer(parseInt(btn.dataset.option)));
    });
    const nextBtn = $('.quiz-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const topic = TOPICS[currentTopicIndex];
        const questions = topic.quiz[currentLang] || topic.quiz.en;
        if (quizState.current < questions.length - 1) {
          quizState.current++;
          quizState.answered = false;
          renderSection('quiz');
        } else {
          renderSection('quiz'); // will show results
        }
      });
    }
  }
  function handleQuizAnswer(selected) {
    if (quizState.answered) return;
    quizState.answered = true;
    const topic = TOPICS[currentTopicIndex];
    const questions = topic.quiz[currentLang] || topic.quiz.en;
    const correct = questions[quizState.current].answer;
    quizState.answers.push(selected);
    // Highlight correct/wrong
    $$('.quiz-option').forEach((btn, i) => {
      btn.classList.add('disabled');
      if (i === correct) btn.classList.add('correct');
      if (i === selected && selected !== correct) btn.classList.add('wrong');
    });
    // Show feedback
    const feedbackArea = $('.quiz-feedback-area');
    if (feedbackArea) {
      const isCorrect = selected === correct;
      feedbackArea.innerHTML = `<div class="quiz-feedback ${isCorrect ? 'correct' : 'wrong'}">
        ${isCorrect ? t('correctMsg') : t('wrongMsg') + questions[quizState.current].options[correct]}
      </div>`;
    }
    // Show next button
    const navArea = $('.quiz-nav');
    if (navArea) navArea.style.display = 'flex';
    // Confetti for correct answer
    if (selected === correct) {
      spawnConfetti();
    }
  }
  function renderQuizResults(questions) {
    const total = questions.length;
    const correctCount = quizState.answers.filter((a, i) => a === questions[i].answer).length;
    const pct = Math.round((correctCount / total) * 100);
    let grade, msg;
    if (pct >= 80) { grade = 'excellent'; msg = t('excellentMsg'); }
    else if (pct >= 50) { grade = 'good'; msg = t('goodMsg'); }
    else { grade = 'needs-work'; msg = t('needsWorkMsg'); }
    if (pct >= 80) setTimeout(() => spawnConfetti(40), 300);
    return `
      <section class="section active">
        <div class="quiz-container">
          <div class="quiz-results">
            <h2>${t('resultsTitle')}</h2>
            <div class="score-circle ${grade}">
              ${pct}%
              <small>${correctCount}/${total}</small>
            </div>
            <p class="message">${msg}</p>
            <div class="btn-group">
              <button class="btn btn-primary" onclick="document.dispatchEvent(new CustomEvent('retryQuiz'))">${t('retryQuiz')}</button>
              <button class="btn btn-secondary" onclick="document.dispatchEvent(new CustomEvent('goHome'))">${t('backHome')}</button>
            </div>
          </div>
        </div>
      </section>`;
  }
  // Custom events for quiz results buttons
  document.addEventListener('retryQuiz', () => {
    quizState = { current: 0, answers: [], answered: false };
    renderSection('quiz');
  });
  document.addEventListener('goHome', () => {
    currentTopicIndex = null;
    renderSection('home');
  });
  // ========== CONFETTI ==========
  function spawnConfetti(count) {
    count = count || 20;
    const colors = ['#e94560', '#f5c518', '#2ecc71', '#3498db', '#9b59b6', '#e67e22', '#ff6b81'];
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.top = '-10px';
      el.style.width = (6 + Math.random() * 8) + 'px';
      el.style.height = (6 + Math.random() * 8) + 'px';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      el.style.animationDelay = (Math.random() * 1) + 's';
      el.style.animationDuration = (2 + Math.random() * 2) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  }
})();
