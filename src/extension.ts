import * as vscode from 'vscode';
import { PanelManager } from './panelManager';

export function activate(context: vscode.ExtensionContext) {
    const panelManager = new PanelManager(context);

    context.subscriptions.push(
        vscode.commands.registerCommand('sf-assistant.runSoqlQuery', async () => {
            await panelManager.createOrShow();
        }),
        vscode.commands.registerCommand('sf-assistant.clearCache', async () => {
            panelManager.clearCache();
        }),
        vscode.commands.registerCommand('sf-assistant.objectExplorer', async () => {
            vscode.window.showInformationMessage('Feature is in development')
        }),
    );
}

export function deactivate() { }