import * as vscode from "vscode";
import { Commands } from "../constants";
import { typeofSjsonc } from "typeof-sjsonc";
import Utils from "../utils";

const disposable = vscode.commands.registerCommand(
  Commands.JsToTypeScript,
  async () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user

    try {
      const { start, end, word } = Utils.getEditorInfo();

      const resultText = typeofSjsonc(Utils.jsObjectToJson(word), "Root", {
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
