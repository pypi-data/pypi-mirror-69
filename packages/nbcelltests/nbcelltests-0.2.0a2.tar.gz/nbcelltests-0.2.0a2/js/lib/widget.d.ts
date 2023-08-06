/******************************************************************************
 *
 * Copyright (c) 2019, the nbcelltest authors.
 *
 * This file is part of the nbcelltest library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Widget } from "@lumino/widgets";
import { Cell } from "@jupyterlab/cells";
import { CodeEditorWrapper } from "@jupyterlab/codeeditor";
import { INotebookTracker } from "@jupyterlab/notebook";
/**
 * Widget holding the Celltests widget, container for options and editor
 *
 * @class      CelltestsWidget (name)
 */
export declare class CelltestsWidget extends Widget {
    currentActiveCell: Cell;
    notebookTracker: INotebookTracker;
    private editor;
    private rules;
    constructor();
    fetchAndSetTests(): void;
    loadTestsForActiveCell(): void;
    saveTestsForActiveCell(): void;
    deleteTestsForActiveCell(): void;
    loadRulesForCurrentNotebook(): void;
    saveRulesForCurrentNotebook(): void;
    get editorWidget(): CodeEditorWrapper;
}
