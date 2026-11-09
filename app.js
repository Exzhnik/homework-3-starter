// Готовая защитная механика. Не изменяйте эту функцию.
function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function selectAttempts(filter) {
  const attempts = window.reportData.attempts

  if (filter === 'passed') {
    return attempts.filter((attempt) => attempt.passed)
  }

  if (filter === 'failed') {
    return attempts.filter((attempt) => !attempt.passed)
  }

  return attempts
}

function renderAttempts(attempts) {
  const resultList = document.querySelector('#result-list')
  let attemptsMarkup = ''

  attempts.forEach((attempt) => {
    const status = attempt.passed ? 'Порог пройден' : 'Порог не пройден'

    attemptsMarkup += `<li class="result-item"><span class="result-name">${escapeHtml(attempt.name)}</span> — ${attempt.score} из ${attempt.questionCount} (${attempt.percentage}%) — ${status}</li>`
  })

  resultList.innerHTML = attemptsMarkup
}

function startFilter() {
  const form = document.querySelector('#filter-form')
  const select = document.querySelector('#filter')
  const resultCount = document.querySelector('#result-count')
  const resultList = document.querySelector('#result-list')

  if (!form || !select || !resultCount || !resultList) {
    return
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const attempts = selectAttempts(select.value)

    renderAttempts(attempts)
    resultCount.textContent = `Показано: ${attempts.length} из ${window.reportData.attempts.length}`
  })
}

startFilter()
