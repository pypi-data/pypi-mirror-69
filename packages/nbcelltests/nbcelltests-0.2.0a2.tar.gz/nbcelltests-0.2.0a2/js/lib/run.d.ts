/******************************************************************************
 *
 * Copyright (c) 2019, the nbcelltest authors.
 *
 * This file is part of the nbcelltest library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { JupyterFrontEnd } from "@jupyterlab/application";
import { IDocumentManager } from "@jupyterlab/docmanager";
export declare function runCellTests(app: JupyterFrontEnd, docManager: IDocumentManager): void;
export declare function runCellLints(app: JupyterFrontEnd, docManager: IDocumentManager): void;
