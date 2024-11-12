'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGlslLanguage = isGlslLanguage;
exports.currentGlslEditor = currentGlslEditor;
exports.currentGlslDocument = currentGlslDocument;
const vscode = require("vscode");
const LANGUAGES = ['glsl', 'cpp', 'c'];
function isGlslLanguage(languageId) {
    return LANGUAGES.indexOf(languageId) !== -1;
}
let lastGlslEditor = null;
function currentGlslEditor() {
    const editor = vscode.window.activeTextEditor;
    // console.log('Common.currentGlslEditor', editor ? editor.document : null);
    if (editor && isGlslLanguage(editor.document.languageId)) {
        lastGlslEditor = editor;
    }
    // Just return the last valid editor we've seen
    return lastGlslEditor;
}
function currentGlslDocument() {
    const editor = currentGlslEditor();
    return editor ? editor.document : null;
}
//# sourceMappingURL=common.js.map