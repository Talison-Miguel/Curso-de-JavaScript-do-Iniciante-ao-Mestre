"use strict";
function showFeedback(message, type) {
    alert(type.toUpperCase() + " - " + message);
}
const feedBack = showFeedback('ola', 'infor');
function showError(message) {
    throw new Error("funçao marcada com never, nunca retorna nada.");
}
const error = showError('teste');
