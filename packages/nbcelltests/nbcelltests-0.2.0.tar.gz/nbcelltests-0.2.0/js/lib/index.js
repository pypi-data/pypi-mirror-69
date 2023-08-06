"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._activate = void 0;
const apputils_1 = require("@jupyterlab/apputils");
const docmanager_1 = require("@jupyterlab/docmanager");
const launcher_1 = require("@jupyterlab/launcher");
const notebook_1 = require("@jupyterlab/notebook");
require("../style/index.css");
const activate_1 = require("./activate");
Object.defineProperty(exports, "_activate", { enumerable: true, get: function () { return activate_1.activate; } });
const extension = {
    activate: activate_1.activate,
    autoStart: true,
    id: "jupyterlab_celltests",
    optional: [launcher_1.ILauncher],
    requires: [docmanager_1.IDocumentManager,
        apputils_1.ICommandPalette,
        notebook_1.INotebookTracker,
        notebook_1.INotebookTools],
};
exports.default = extension;
