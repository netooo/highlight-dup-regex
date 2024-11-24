
/* IMPORT */

import * as vscode from 'vscode';
import {forceDecorate} from './commands';
import Config from './config';
import Decorator from './decorator';

/* ACTIVATE */

function activate ( context: vscode.ExtensionContext ) {
  Decorator.init ();

  context.subscriptions.push (
    vscode.workspace.onDidChangeConfiguration ( () => { Decorator.init (); Decorator.decorate ( undefined, true ); } ),
    vscode.workspace.onDidChangeTextDocument ( () => Decorator.decorate ( undefined, true ) ),
    vscode.window.onDidChangeActiveTextEditor ( () => Decorator.decorate ( undefined, true ) )
  );

  vscode.commands.registerCommand ( 'highlight.forceDecorate', forceDecorate );

  Config.init ();

  Decorator.decorate ();

}

/* EXPORT */

export {activate};
