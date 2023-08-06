/******************************************************************************
 *
 * Copyright (c) 2019, the nbcelltest authors.
 *
 * This file is part of the nbcelltest library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
import { JupyterFrontEndPlugin } from "@jupyterlab/application";
import "../style/index.css";
import { activate } from "./activate";
declare const extension: JupyterFrontEndPlugin<void>;
export default extension;
export { activate as _activate };
