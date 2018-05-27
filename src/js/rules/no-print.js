'use strict';

module.exports = {
    create(context) {
        return {
            'printStatement:enter': function(astNode) {
                let node = astNode.node;
                context.report({
                    message: `'print' statements should only be used for debugging purposes.`,
                    loc: {
                        start: node.start,
                        end: node.stop
                    }
                });
            }
        };
    }
};