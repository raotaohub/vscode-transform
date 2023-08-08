import * as vscode from "vscode";
import { Commands } from "../constants";
import { compile } from "json-schema-to-typescript";
import Utils from "../utils";

const disposable = vscode.commands.registerCommand(
  Commands.JsonSschemaToTypeScript,
  async () => {
    try {
      const { start, end, word } = Utils.getEditorInfo();

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
