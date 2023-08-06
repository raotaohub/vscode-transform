import * as vscode from "vscode";
import { Commands } from "../constants";
import { compile } from "json-schema-to-typescript";

const disposable = vscode.commands.registerCommand(
  Commands.JsonSschemaToTypeScript,
  async () => {
    try {
      const editor = vscode.window.activeTextEditor;
      const document = editor!.document;
      const start = editor!.selection.start;
      const end = editor!.selection.end;
      const word = document.getText(
        new vscode.Range(start.line, start.character, end.line, end.character)
      );

      const parseWord = JSON.parse(word);

      const resultText = await compile(parseWord, "IRoot", {
        bannerComment: "",
      });

      vscode.window.activeTextEditor!.edit((editBuilder) => {
        editBuilder.replace(new vscode.Range(start, end), resultText);
      });
    } catch (error: any) {
      vscode.window.showErrorMessage(error.message);
    }
  }
);

// module.exports = function jsonSschemaToTypeScript(context: any) {
//   context.subscriptions.push(disposable);
// };

export { disposable };

// export default jsonSschemaToTypeScript;
