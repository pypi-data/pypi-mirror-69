/******************************************************************************
 *
 * Copyright (c) 2019, the nbcelltest authors.
 *
 * This file is part of the nbcelltest library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { Message } from "@lumino/messaging";
import { JupyterFrontEnd } from "@jupyterlab/application";
import { INotebookTools, INotebookTracker, NotebookTools } from "@jupyterlab/notebook";
import { ObservableJSON } from "@jupyterlab/observables";
export declare class CelltestsTool extends NotebookTools.Tool {
    notebookTracker: INotebookTracker;
    cellTools: INotebookTools;
    private widget;
    constructor(app: JupyterFrontEnd, notebook_Tracker: INotebookTracker, cellTools: INotebookTools);
    /**
     * Handle a change to the active cell.
     */
    protected onActiveCellChanged(msg: Message): void;
    protected onAfterShow(): void;
    protected onAfterAttach(): void;
    protected onMetadataChanged(msg: ObservableJSON.ChangeMessage): void;
}
