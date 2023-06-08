import { MatDialog } from "@angular/material/dialog";
import { PersonInfoDialog } from "src/app/pages-components/person-info-dialog/person-info-dialog.component";
import { AbstractTileClickCommand } from "../abstr-tile-click.command";
import { TileClickContext } from "../tile-click.context";

export class TileDialog extends AbstractTileClickCommand{
    constructor(
        protected dialog: MatDialog,
        context: TileClickContext
    ){
        super(context);
    }
    public execute() {
        const dialogRef = this.dialog.open(PersonInfoDialog, {
        panelClass:'dialog',
        backdropClass: 'dialog-blur'
        });
    }

}