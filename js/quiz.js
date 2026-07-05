(function () {
  const state = {
    lessonId: null,
    lang: "en",
    quiz: null,
    currentIndex: 0,
    score: 0,
    selected: null,
    userAnswers: [],
    isFinished: false,
  };

  const modal = document.getElementById("quiz-modal");
  const modalBody = document.getElementById("quiz-modal-body");

  function shuffle(array) {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  }

  function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  function quizFilePath(lessonId, lang) {
    return `quizzes/json/${lessonId}-${lang}.json`;
  }

  function normalizeQuiz(raw) {
    const questions = shuffle(raw.questions).map((q) => {
      const choices = shuffle(q.choices);
      return { ...q, choices };
    });
    return { ...raw, questions };
  }

  function renderQuestion() {
    const language = window.LanguageService.LANGUAGES[state.lang];
    const t = language.quizText;
    const question = state.quiz.questions[state.currentIndex];
    const isLast = state.currentIndex === state.quiz.questions.length - 1;
    const remaining = state.quiz.questions.length - (state.currentIndex + 1);
    const progress = Math.round(((state.currentIndex + 1) / state.quiz.questions.length) * 100);

    modalBody.innerHTML = `
      <div class="quiz-header">
        <h3 id="quiz-modal-title">${state.quiz.title}</h3>
        <p>${state.quiz.description}</p>
      </div>
      <div class="quiz-meta">
        <p><strong>${t.question} ${state.currentIndex + 1} ${t.of} ${state.quiz.questions.length}</strong> (${remaining} ${t.remaining})</p>
      </div>
      <div class="bar-shell"><div class="bar-fill" style="width:${progress}%"></div></div>
      <article class="quiz-question">
        <h4>${question.prompt}</h4>
        <div class="quiz-choices">
          ${question.choices
            .map(
              (choice, index) => `
              <button class="choice-btn" data-index="${index}" type="button" aria-label="Answer choice ${index + 1}">
                ${choice.text}
              </button>
            `
            )
            .join("")}
        </div>
      </article>
      <div class="quiz-footer" style="display: flex; justify-content: ${state.currentIndex === 0 ? 'flex-end' : 'space-between'};">
        ${
          state.currentIndex > 0
            ? `<button id="prev-btn" class="btn btn-ghost" type="button">${t.prev}</button>`
            : ""
        }
        <button id="next-btn" class="btn btn-primary" type="button" disabled>
          ${isLast ? t.finish : t.next}
        </button>
      </div>
    `;

    const choices = modalBody.querySelectorAll(".choice-btn");
    const nextBtn = modalBody.querySelector("#next-btn");
    const prevBtn = modalBody.querySelector("#prev-btn");

    choices.forEach((choiceBtn) => {
      choiceBtn.addEventListener("click", () => {
        choices.forEach((c) => c.classList.remove("selected"));
        choiceBtn.classList.add("selected");
        state.selected = Number(choiceBtn.dataset.index);
        nextBtn.disabled = false;
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (state.currentIndex > 0) {
          state.currentIndex -= 1;
          const lastAnswer = state.userAnswers.pop();
          if (lastAnswer && lastAnswer.correct) {
            state.score -= 1;
          }
          state.selected = null;
          renderQuestion();
        }
      });
    }

    nextBtn.addEventListener("click", () => {
      if (state.selected === null) {
        return;
      }

      nextBtn.disabled = true;
      if (prevBtn) prevBtn.disabled = true;
      choices.forEach((c) => (c.disabled = true));

      const selectedChoice = question.choices[state.selected];
      const isCorrect = selectedChoice.id === question.correctChoiceId;
      if (isCorrect) {
        state.score += 1;
        choices[state.selected].classList.add("correct");
      } else {
        choices[state.selected].classList.add("incorrect");
        const correctIndex = question.choices.findIndex((c) => c.id === question.correctChoiceId);
        if (correctIndex !== -1) {
          choices[correctIndex].classList.add("correct");
        }
      }

      state.userAnswers.push({
        questionId: question.id,
        selectedChoiceId: selectedChoice.id,
        correct: isCorrect,
      });

      setTimeout(() => {
        state.selected = null;
        if (isLast) {
          state.isFinished = true;
          renderResult();
        } else {
          state.currentIndex += 1;
          renderQuestion();
        }
      }, 900);
    });
  }

  function findQuestionAnswer(question, answerRecord) {
    const selected = question.choices.find((c) => c.id === answerRecord.selectedChoiceId);
    const correct = question.choices.find((c) => c.id === question.correctChoiceId);
    return {
      selected: selected ? selected.text : "No answer",
      correct: correct ? correct.text : "",
    };
  }

  function renderSolutions() {
    const language = window.LanguageService.LANGUAGES[state.lang];
    const t = language.quizText;

    const cards = state.quiz.questions
      .map((question, index) => {
        const answerRecord = state.userAnswers.find((item) => item.questionId === question.id);
        const answers = findQuestionAnswer(question, answerRecord || { selectedChoiceId: "" });

        return `
          <article class="solution-card">
            <p><strong>${t.question} ${index + 1}</strong> <span class="badge ${answerRecord && answerRecord.correct ? "ok" : "no"}">${
              answerRecord && answerRecord.correct ? t.correct : t.incorrect
            }</span></p>
            <p>${question.prompt}</p>
            <p><strong>${t.yourAnswer}:</strong> ${answers.selected}</p>
            <p><strong>${t.correctAnswer}:</strong> ${answers.correct}</p>
            <p><strong>${t.steps}:</strong> ${question.explanation}</p>
          </article>
        `;
      })
      .join("");

    modalBody.innerHTML = `
      <section>
        <h3>${window.LanguageService.LANGUAGES[state.lang].quizText.viewSolutions}</h3>
        <div class="solution-list">${cards}</div>
      </section>
    `;
  }

  function renderResult() {
    const language = window.LanguageService.LANGUAGES[state.lang];
    const t = language.quizText;
    const total = state.quiz.questions.length;
    const percent = Math.round((state.score / total) * 100);
    const passed = percent >= 70;
    const feedback = percent >= 90 ? t.excellent : percent >= 70 ? t.good : t.keep;

    const stats = window.StorageService.updateLessonStats(state.lessonId, state.score, total);
    const isHighScore = stats.highestScore === state.score && stats.bestPercent === percent;

    if (isHighScore && percent >= 85) {
      window.AnimationService.confettiBurst();
    }

    modalBody.innerHTML = `
      <section class="result-panel ${passed ? "celebrate" : ""}">
        <h3>${feedback}</h3>
        <p class="result-score">${state.score}/${total} (${percent}%)</p>
        <p class="${passed ? "pass" : "fail"}" style="font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">${passed ? t.pass : t.fail}</p>
        <p style="color: var(--text-muted);">Highest score: ${stats.highestScore}/${total} | Best: ${stats.bestPercent}% | Attempts: ${stats.attempts}</p>

        <div class="result-actions">
          <button id="view-solutions" class="btn btn-ghost" type="button">${t.viewSolutions}</button>
          <button id="try-again" class="btn btn-primary" type="button">${t.tryAgain}</button>
          <button id="choose-another" class="btn btn-ghost" type="button">${t.anotherQuiz}</button>
          <button id="back-lessons" class="btn btn-ghost" type="button">${t.backLessons}</button>
        </div>
      </section>
    `;

    const rerender = window.AppService && window.AppService.renderAll;
    if (typeof rerender === "function") {
      rerender();
    }

    modalBody.querySelector("#view-solutions").addEventListener("click", renderSolutions);
    modalBody.querySelector("#try-again").addEventListener("click", () => startQuiz(state.lessonId, state.lang, true));
    modalBody.querySelector("#choose-another").addEventListener("click", closeModal);
    modalBody.querySelector("#back-lessons").addEventListener("click", () => {
      closeModal();
      document.getElementById("lessons").scrollIntoView({ behavior: "smooth" });
    });
  }

  async function startQuiz(lessonId, lang, forceRestart = false) {
    if (!forceRestart && state.quiz && state.lessonId === lessonId && state.lang === lang && !state.isFinished) {
      openModal();
      return; 
    }

    state.lessonId = lessonId;
    state.lang = lang;
    state.currentIndex = 0;
    state.score = 0;
    state.selected = null;
    state.userAnswers = [];
    state.isFinished = false;

    try {
      const response = await fetch(quizFilePath(lessonId, lang));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const rawQuiz = await response.json();
      state.quiz = normalizeQuiz(rawQuiz);
      openModal();
      renderQuestion();
    } catch (error) {
      openModal();
      console.error(error);
      if (window.location.protocol === "file:") {
        modalBody.innerHTML = `
          <div style="text-align: center; padding: 2rem;">
            <p style="color: var(--danger); font-weight: 700; margin-bottom: 1rem;">Unable to load quiz data.</p>
            <p>Your browser blocked loading the quiz data because you are opening the file directly from your computer (<code>file://</code> protocol).</p>
            <p style="margin-top: 1rem; font-weight: bold;">To fix this:</p>
            <p>Please open this project using a local web server (like the <strong>Live Server</strong> extension in VS Code).</p>
          </div>
        `;
      } else {
        modalBody.innerHTML = "<p>Unable to load quiz data. Please check file paths and try again.</p>";
      }
    }
  }

  function handleCloseRequest() {
    if (!state.isFinished && state.quiz && state.currentIndex >= 0 && state.selected === null && state.currentIndex !== state.quiz.questions.length) {
       const confirmClose = window.confirm("Are you sure you want to pause taking this quiz? Your progress will be saved.");
       if (!confirmClose) return;
    }
    closeModal();
  }

  document.getElementById("close-quiz-modal").addEventListener("click", handleCloseRequest);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      handleCloseRequest();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    
    if (e.key >= "1" && e.key <= "4") {
      const index = parseInt(e.key) - 1;
      const choices = modalBody.querySelectorAll(".choice-btn");
      if (choices[index] && !choices[index].disabled) {
        choices[index].click();
      }
    } else if (e.key === "Enter") {
      const nextBtn = modalBody.querySelector("#next-btn");
      if (nextBtn && !nextBtn.disabled) {
        nextBtn.click();
      }
    } else if (e.key === "Escape") {
      handleCloseRequest();
    }
  });

  window.QuizService = {
    startQuiz,
  };
})();
