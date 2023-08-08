import * as vscode from "vscode";

const jsObjectToJson = (objStr: string) => {
  return JSON.stringify(Function('"use strict";return (' + objStr + ")")());
};

const getEditorInfo = () => {
  const editor = vscode.window.activeTextEditor;
  const document = editor!.document;
  const start = editor!.selection.start;
  const end = editor!.selection.end;
  const word = document.getText(
    new vscode.Range(start.line, start.character, end.line, end.character)
  );

  return { start, end, word };
};
const Utils = {
  jsObjectToJson,
  getEditorInfo,
};

export default Utils;
