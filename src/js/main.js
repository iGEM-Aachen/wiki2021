function scramble(a, p) {
    letters = ['A', 'C', 'G', 'T'];
    a = a.split('');

    for (k = 0; k < a.length; k++) {
        if (Math.random() <= p) {
            a[k] = letters[Math.floor(Math.random() * letters.length)];
        }
    }
    return a.join('');
}

async function scrambleText(id) {
    var text_area = document.getElementById(id);
    var original_text = text_area.innerHTML;

    var words = original_text.split(' ');
    var scrambled_words = [];

    for (j = 0; j < 4; j++) {
        for (i = 0; i < words.length; i++) {
            scrambled_words[i] = scramble(words[i], 1);
        }

        text_area.innerHTML = scrambled_words.join(' ');
        await sleep(200);
    }

    text_area.innerHTML = original_text;
}

function resetText(id, str) {
    stopScramble = true;
    document.getElementById(id).innerHTML = str;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}