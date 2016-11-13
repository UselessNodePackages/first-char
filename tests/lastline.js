require('..') // first-char module

module.exports = {
    easy: function (test) {
        test.equals('string'.firstChar, 's')
        test.equals('xxx'.firstChar, 'x')
        test.done()
    },
	single_char: function (test) {
		test.equals('a'.firstChar, 'a')
        test.done()
	},
	cjk_characters: function (test) {
		test.equals('中'.firstChar, '中')
		test.equals('文'.firstChar, '文')
		test.equals('字'.firstChar, '字')
        test.done()
	},
	unprintable: function (test) {
		test.equals('\0'.firstChar, '\u0000')
		test.equals('\u0087'.firstChar, '\u0087')
		test.done()
	},
	empty_string: function (test) {
		test.equals(''.firstChar, undefined)
		test.done()
	}
}
