var keywords = [
        'abstract',   'continue',   'for',          'new',         'switch',
        'assert',     'default',    'if',           'package',     'synchronized',
        'boolean',    'do',         'goto',         'private',     'this',
        'break',      'double',     'implements',   'protected',   'throw',
        'byte',       'else',       'import',       'public',      'throws',
        'case',       'enum',       'instanceof',   'return',      'transient',
        'catch',      'extends',    'int',          'short',       'try',
        'char',       'final',      'interface',    'static',      'void',
        'class',      'finally',    'long',         'strictfp',    'volatile',
        'const',      'float',      'native',       'super',       'while',
        'true',       'false',      'null'
    ],
    identifierRegEx = /[a-z,A-Z,_][a-z,A-Z,_,0-9]*/;

module.exports = function (word) {
    if(word && keywords.indexOf(word) < 0) {
        var match = word.match(identifierRegEx);
        return match ? match[0] === word : false;
    }
    return false;
};
