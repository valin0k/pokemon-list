

module.exports = {
	'extends': 'airbnb',
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'jsx': true,
			'restParams': true
		}
	},
	"settings": {
		"import/resolver": "webpack",
		"import/cache": 5,
		"import/ignore": [
			/\.(scss|css)$/
		]
	},
	'plugins': [
		'cumul8',
		'jasmine',
	],
	'env': {
		'es6': true,
		'browser': true,
		'jasmine': true,
	},
	'rules': {
		// Del when it will be in eslint-plugin-react
		"cumul8/react-require-optimization": 0,
		"cumul8/inefficient-for-each": 2,
		"cumul8/inefficient-for-loop": 2,

		"id-blacklist": ['warn', '_gaq'],

		'comma-dangle': ["error", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "ignore",
		}],
		'operator-assignment': 'off',
		'no-bitwise': 'off',
		'no-useless-escape': 'warn',
		'no-void': 'warn',
		'no-prototype-builtins': 'warn',
		'no-continue': 'warn',
		'no-plusplus': 'off',
		'object-shorthand': 'off',


		'indent': ['error', 'tab', {'SwitchCase': 1}],
		'no-multi-spaces': ['error', {
			'exceptions': {
				'VariableDeclarator': true,
				'AssignmentExpression': true,
				'BinaryExpression': true,
				'CallExpression': true,
				'IfStatement': true,
				'ObjectExpression': true
			}
		}],
		'class-methods-use-this': 'warn',
		'arrow-parens': 'off',
		'no-console': 'error',
		'no-undefined': 'error',
		'space-before-function-paren': ['error', 'never'],
		'key-spacing': [2, {'mode': 'minimum', 'beforeColon': false, 'afterColon': true}],
		'quote-props': [2, 'consistent', { 'keywords': false, 'unnecessary': true, 'numbers': false }],
		'id-length': ['error', {'min': 2, 'properties': 'never', 'exceptions': ['_', '$']}],
		'import/no-unresolved': 'off',
		'import/first': 'off',
		'import/no-webpack-loader-syntax': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'warn',
		'import/extensions': 'off',
		'object-curly-spacing': ['error', 'never'],
		'prefer-spread': 'error',
		'constructor-super': 'error',
		'no-class-assign': 'error',
		'no-this-before-super': 'error',
		'no-underscore-dangle': ['error', {
			'allowAfterThis': true,
			'allow': [
				'_id',
				'_gaq',
				'__DEV__',
				'__VERSION__',
				'__COMMITHASH__',
			]
		}],
		// 'complexity': ['error', 35],          // decrease to 20 -> 11
		'max-len': ['error', 130, 4],         // decrease to [2, 120, 4]
		'max-statements': ['error', 41],      // decrease to 10
		'max-params': ['error', 5],           // decrease to 3
		'max-nested-callbacks': ['error', 5], // decrease to 2 -> min
		'max-depth': ['error', 4],
		// Enable this
		'prefer-template': 'warn', // & del
		'no-use-before-define': 'warn', // & del
		'no-param-reassign': ['warn', {'props': true}], // & del
		'no-alert': 'warn',
		'no-tabs': 'off',
		'no-mixed-operators': 'off',
		'consistent-return': 'warn', // & del
		'object-shorthand': ['warn', 'always'], // & del
		'prefer-arrow-callback': 'off', // & del
		'newline-per-chained-call': 'off', // & del
		// Disabled
		'func-names': 'off',

		// React
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-key': 'error',
		'react/jsx-no-duplicate-props': ['error', { 'ignoreCase': false }],
		'react/no-direct-mutation-state': 'error',
		'react/prefer-es6-class': ['warn', 'always'],
		'react/require-default-props': 'warn',
		'react/no-array-index-key': 'warn',
		'jsx-quotes': ['error', 'prefer-double'],
		'jsx-a11y/href-no-hash': 'error',
		'jsx-a11y/label-has-for': 'warn',
		'jsx-a11y/no-static-element-interactions': 'warn',
		'jsx-a11y/anchor-has-content': 'warn',
		// React Enable
		'react/jsx-handler-names': [1, {
			'eventHandlerPrefix': 'handle',
			'eventHandlerPropPrefix': 'on',
		}],
		'react/forbid-prop-types': [1, { 'forbid': ['any', 'array', 'object'] }],
		'react/jsx-no-bind': 'warn',
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-first-prop-new-line': 'warn',
		'react/jsx-curly-spacing': 'warn',
		'react/jsx-filename-extension': 'off',
		'react/no-find-dom-node': 'warn',
		'react/no-unused-prop-types': 'warn',
		'react/no-string-refs': 'warn',
		'react/prefer-stateless-function': 'warn',
		'react/jsx-no-target-blank': 'warn',
	},
	'globals': {
		'$': true,
		'_': true,
		'_gaq': true,
		'i18n': true,
		'commands': true,
		'moment': true,
		'reqres': true,
		'ymaps': true,

		// Tests
		'sandbox': true,
		'appendSetFixtures': true
	}
};
