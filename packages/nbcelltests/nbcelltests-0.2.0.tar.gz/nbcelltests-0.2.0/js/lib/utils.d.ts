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
export declare const CELLTESTS_CATEGORY = "Celltests";
export declare const CELLTESTS_TEST_ID = "celltests:test";
export declare const CELLTESTS_LINT_ID = "celltests:lint";
export declare const CELLTESTS_TEST_CAPTION = "Run Celltests";
export declare const CELLTESTS_LINT_CAPTION = "Run Lint";
export declare const CELLTEST_TOOL_CLASS = "CelltestTool";
export declare const CELLTEST_TOOL_CONTROLS_CLASS = "CelltestsControls";
export declare const CELLTEST_TOOL_RULES_CLASS = "CelltestsRules";
export declare const CELLTEST_TOOL_EDITOR_CLASS = "CelltestsEditor";
export declare function isEnabled(app: JupyterFrontEnd, docManager: IDocumentManager): () => boolean;
