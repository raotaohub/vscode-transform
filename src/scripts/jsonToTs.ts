import * as vscode from "vscode";
import { Commands } from "../constants";
import { typeofSjsonc } from "typeof-sjsonc";

const disposable = vscode.commands.registerCommand(
  Commands.JsonToTypeScript,
  async () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user

    try {
      const editor = vscode.window.activeTextEditor;
      const document = editor!.document;
      const start = editor!.selection.start;
      const end = editor!.selection.end;
      const word = document.getText(
        new vscode.Range(start.line, start.character, end.line, end.character)
      );

      const resultText = typeofSjsonc(word, "Root", {
        disallowComments: false,
        separate: false,
        prefix: "I",
      });

      vscode.window.activeTextEditor!.edit((editBuilder) => {
        editBuilder.replace(new vscode.Range(start, end), resultText);
      });
    } catch (error: any) {
      vscode.window.showErrorMessage(error.message);
    }
  }
);

// module.exports = function jsonToTypeScript(context: any) {
//   context.subscriptions.push(disposable);
// };

export { disposable };

// export default jsonToTypeScript;
