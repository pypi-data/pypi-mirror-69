"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCellLints = exports.runCellTests = void 0;
const apputils_1 = require("@jupyterlab/apputils");
const coreutils_1 = require("@jupyterlab/coreutils");
const widgets_1 = require("@lumino/widgets");
const requests_helper_1 = require("requests-helper");
function runCellTests(app, docManager) {
    apputils_1.showDialog({
        buttons: [apputils_1.Dialog.cancelButton(), apputils_1.Dialog.okButton({ label: "Ok" })],
        title: "Run tests?",
    }).then((result) => {
        if (result.button.label === "Cancel") {
            return;
        }
        const context = docManager.contextForWidget(app.shell.currentWidget);
        let path = "";
        let model = {};
        if (context) {
            path = context.path;
            model = context.model.toJSON();
        }
        return new Promise((resolve) => {
            requests_helper_1.request("post", coreutils_1.PageConfig.getBaseUrl() + "celltests/test/run", {}, { path, model }).then((res) => {
                if (res.ok) {
                    const div = document.createElement("div");
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                    div.innerHTML = res.json().test;
                    const body = new widgets_1.Widget({ node: div });
                    const dialog = new apputils_1.Dialog({
                        body,
                        buttons: [apputils_1.Dialog.okButton({ label: "Ok" })],
                        title: "Tests run!",
                    });
                    dialog.node.lastChild.style.maxHeight = "750px";
                    dialog.node.lastChild.style.maxWidth = "800px";
                    dialog.node.lastChild.style.width = "800px";
                    dialog.launch().then(() => {
                        resolve();
                    });
                }
                else {
                    apputils_1.showDialog({
                        body: "Check the Jupyter logs for the exception.",
                        buttons: [apputils_1.Dialog.okButton({ label: "Ok" })],
                        title: "Something went wrong!",
                    }).then(() => {
                        resolve();
                    });
                }
            });
        });
    });
}
exports.runCellTests = runCellTests;
function runCellLints(app, docManager) {
    apputils_1.showDialog({
        buttons: [apputils_1.Dialog.cancelButton(), apputils_1.Dialog.okButton({ label: "Ok" })],
        title: "Run Lint?",
    }).then((result) => {
        if (result.button.label === "Cancel") {
            return;
        }
        const context = docManager.contextForWidget(app.shell.currentWidget);
        let path = "";
        let model = {};
        if (context) {
            path = context.path;
            model = context.model.toJSON();
        }
        return new Promise((resolve) => {
            requests_helper_1.request("post", coreutils_1.PageConfig.getBaseUrl() + "celltests/lint/run", {}, { path, model }).then((res) => {
                if (res.ok) {
                    const div = document.createElement("div");
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
                    div.innerHTML = res.json().lint;
                    const body = new widgets_1.Widget({ node: div });
                    const dialog = new apputils_1.Dialog({
                        body,
                        buttons: [apputils_1.Dialog.okButton({ label: "Ok" })],
                        title: "Lints run!",
                    });
                    dialog.node.lastChild.style.maxHeight = "750px";
                    dialog.node.lastChild.style.maxWidth = "500px";
                    dialog.node.lastChild.style.width = "500px";
                    dialog.launch().then(() => {
                        resolve();
                    });
                }
                else {
                    apputils_1.showDialog({
                        body: "Check the Jupyter logs for the exception.",
                        buttons: [apputils_1.Dialog.okButton({ label: "Ok" })],
                        title: "Something went wrong!",
                    }).then(() => {
                        resolve();
                    });
                }
            });
        });
    });
}
exports.runCellLints = runCellLints;
