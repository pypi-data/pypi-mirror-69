"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CelltestsTool = void 0;
const widgets_1 = require("@lumino/widgets");
const notebook_1 = require("@jupyterlab/notebook");
const utils_1 = require("./utils");
const widget_1 = require("./widget");
class CelltestsTool extends notebook_1.NotebookTools.Tool {
    constructor(app, notebook_Tracker, cellTools) {
        super();
        this.notebookTracker = null;
        this.cellTools = null;
        this.widget = null;
        this.notebookTracker = notebook_Tracker;
        this.cellTools = cellTools;
        const layout = (this.layout = new widgets_1.PanelLayout());
        this.addClass(utils_1.CELLTEST_TOOL_CLASS);
        this.widget = new widget_1.CelltestsWidget();
        this.widget.notebookTracker = notebook_Tracker;
        layout.addWidget(this.widget);
    }
    /**
     * Handle a change to the active cell.
     */
    onActiveCellChanged(msg) {
        this.widget.currentActiveCell = this.cellTools.activeCell;
        this.widget.loadTestsForActiveCell();
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onAfterShow() {
    }
    onAfterAttach() {
        this.notebookTracker.currentWidget.context.ready.then(() => {
            this.widget.loadTestsForActiveCell();
            this.widget.loadRulesForCurrentNotebook();
        });
        this.notebookTracker.currentChanged.connect(() => {
            this.widget.loadTestsForActiveCell();
            this.widget.loadRulesForCurrentNotebook();
        });
        this.notebookTracker.currentWidget.model.cells.changed.connect(() => {
            this.widget.loadTestsForActiveCell();
            this.widget.loadRulesForCurrentNotebook();
        });
    }
    onMetadataChanged(msg) {
        this.widget.loadTestsForActiveCell();
        this.widget.loadRulesForCurrentNotebook();
    }
}
exports.CelltestsTool = CelltestsTool;
