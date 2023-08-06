"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const run_1 = require("./run");
const tool_1 = require("./tool");
// tslint:disable-next-line:max-line-length
const utils_1 = require("./utils");
function activate(app, docManager, palette, tracker, cellTools) {
    /* Add to cell tools sidebar */
    const testsTool = new tool_1.CelltestsTool(app, tracker, cellTools);
    cellTools.addItem({ tool: testsTool, rank: 1.9 });
    /* Add to commands to sidebar */
    palette.addItem({ command: utils_1.CELLTESTS_TEST_ID, category: utils_1.CELLTESTS_CATEGORY });
    palette.addItem({ command: utils_1.CELLTESTS_LINT_ID, category: utils_1.CELLTESTS_CATEGORY });
    app.commands.addCommand(utils_1.CELLTESTS_TEST_ID, {
        caption: utils_1.CELLTESTS_TEST_CAPTION,
        execute: (args) => {
            run_1.runCellTests(app, docManager);
        },
        isEnabled: utils_1.isEnabled(app, docManager),
        label: utils_1.CELLTESTS_TEST_CAPTION,
    });
    app.commands.addCommand(utils_1.CELLTESTS_LINT_ID, {
        caption: utils_1.CELLTESTS_LINT_CAPTION,
        execute: (args) => {
            run_1.runCellLints(app, docManager);
        },
        isEnabled: utils_1.isEnabled(app, docManager),
        label: utils_1.CELLTESTS_LINT_CAPTION,
    });
}
exports.activate = activate;
