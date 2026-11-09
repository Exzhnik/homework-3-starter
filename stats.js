const PASSING_PERCENTAGE = 67

function isArray(value) {
  return Array.isArray(value)
}

export function validateQuizData(data) {
  // TODO: проверьте корень, quizTitle, correctAnswers и attempts.
  // Для массивов вызывайте готовую функцию isArray(value).
  // У каждой попытки должны быть непустое имя и массив answers нужной длины.
  return false
}

export function calculateAttempt(attempt, correctAnswers) {
  // TODO: посчитайте score, percentage и passed для одной попытки.
  // Процент округлите через Math.round(); порог хранится в PASSING_PERCENTAGE.
  return null
}

export function calculateReport(data) {
  // TODO: рассчитайте все попытки и сводку.
  // При равном score оставьте первого лучшего участника.
  return null
}
