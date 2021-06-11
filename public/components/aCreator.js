function permute(input) {
    var permArr = [],
            usedChars = [];

    function permute_recursive(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            permute_recursive(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr
    }

    return permute_recursive(input);
}


function generate_word_list() {
    var words = $('#words').val();
    words = words.split(/[\r\n]+/);
    words = _.map(words, function (word) {
        word = _.trim(word);
        if (word.length > 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
    });
    words = _.filter(words, function (word) {
        return !_.isEmpty(word);
    });
    words = _.uniq(words);
    words.sort();
    console.log(words);

    var wordList = $('#candidate_words');
    wordList.html('');

    var wordListItems = [];
    _.each(words, function (word) {
        var wordListItem = $('<li>' +
                '<label>' +
                '<input type="checkbox" ' +
                'name="candidate_words" ' +
                'data-candidate-word="'
                + word
                + '"/>'
                + word
                + '</label>' +
                '</li>');
        wordListItem.find('input').prop('checked', true);
        wordListItems.push(wordListItem);
    });

    wordList.append(wordListItems);
}


function generate_acronyms() {
    var candidateWords = [];
    $('#candidate_words').find('input:checked').each(function () {
        candidateWords.push($(this).data('candidate-word'));
    });
    console.log(candidateWords);
    var permuations = permute(candidateWords);
    console.log(permuations);


    var acronymList = $('#candidate_acronyms');
    acronymList.html('');

    var acronymListItems = [];
    _.each(permuations, function (permuation) {
        var acronym = _.map(permuation, function (word) {

            return word.charAt(0);
        }).join('');
        var name = permuation.join(' ');
        var acronymListItem = $('<li>' +
                '<label>' +
                '<input type="checkbox" ' +
                'name="candidate_acronym" ' +
                'data-candidate-acronym="'
                + acronym
                + '"/>'
                + '<b>' + acronym + '</b>' + ' - ' + name
                + '</label>' +
                '</li>');
        acronymListItem.find('input').prop('checked', true);
        acronymListItems.push(acronymListItem);
    });

    acronymList.append(acronymListItems);
}

$(document).ready(function () {
    $('#generate_acronyms').click(function () {
        generate_word_list();
        generate_acronyms();
    });

    $('#generate_acronyms2').click(function () {
        generate_acronyms();
    });

});