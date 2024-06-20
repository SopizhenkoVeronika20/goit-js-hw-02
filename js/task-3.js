// Перевірка спаму

function checkForSpam(message) {
  const spamWords = ["spam", "sale"];
  const lowerCaseMessage = message.toLowerCase();
  for (const spamWord of spamWords) {
    if (lowerCaseMessage.includes(spamWord)) {
      return true;
    }
  }
  return false;
}
