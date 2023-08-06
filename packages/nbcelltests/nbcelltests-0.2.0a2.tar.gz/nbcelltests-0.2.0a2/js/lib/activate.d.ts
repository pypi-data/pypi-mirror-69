/******************************************************************************
 *
 * Copyright (c) 2019, the nbcelltest authors.
 *
 * This file is part of the nbcelltest library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { JupyterFrontEnd } from "@jupyterlab/application";
import { ICommandPalette } from "@jupyterlab/apputils";
import { IDocumentManager } from "@jupyterlab/docmanager";
import { INotebookTools, INotebookTracker } from "@jupyterlab/notebook";
export declare function activate(app: JupyterFrontEnd, docManager: IDocumentManager, palette: ICommandPalette, tracker: INotebookTracker, cellTools: INotebookTools): void;
