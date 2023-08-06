"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnabled = exports.CELLTEST_TOOL_EDITOR_CLASS = exports.CELLTEST_TOOL_RULES_CLASS = exports.CELLTEST_TOOL_CONTROLS_CLASS = exports.CELLTEST_TOOL_CLASS = exports.CELLTESTS_LINT_CAPTION = exports.CELLTESTS_TEST_CAPTION = exports.CELLTESTS_LINT_ID = exports.CELLTESTS_TEST_ID = exports.CELLTESTS_CATEGORY = void 0;
exports.CELLTESTS_CATEGORY = "Celltests";
exports.CELLTESTS_TEST_ID = "celltests:test";
exports.CELLTESTS_LINT_ID = "celltests:lint";
exports.CELLTESTS_TEST_CAPTION = "Run Celltests";
exports.CELLTESTS_LINT_CAPTION = "Run Lint";
exports.CELLTEST_TOOL_CLASS = "CelltestTool";
exports.CELLTEST_TOOL_CONTROLS_CLASS = "CelltestsControls";
exports.CELLTEST_TOOL_RULES_CLASS = "CelltestsRules";
exports.CELLTEST_TOOL_EDITOR_CLASS = "CelltestsEditor";
function isEnabled(app, docManager) {
    return () => (app.shell.currentWidget &&
        docManager.contextForWidget(app.shell.currentWidget) &&
        docManager.contextForWidget(app.shell.currentWidget).model) ? true : false;
}
exports.isEnabled = isEnabled;
