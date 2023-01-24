function showFeedback(message: string, type: string): void {
    alert(type.toUpperCase() + " - " + message)

}

const feedBack = showFeedback('ola', 'infor')


function showError(message: string): never {
    throw new Error("funçao marcada com never, nunca retorna nada.")
}

const error = showError('teste')