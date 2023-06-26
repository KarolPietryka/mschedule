import { MatDialog } from "@angular/material/dialog";
import { PersonInfoData } from "src/app/model/person/person-info-data.model";
import { PersonInfoDialog } from "src/app/pages-components/person-info-dialog/person-info-dialog.component";
import { AbstractTileClickCommand } from "../abstr-tile-click.command";
import { TileClickContext } from "../tile-click.context";

export class TileDialog extends AbstractTileClickCommand{
    constructor(
        protected dialog: MatDialog,
        private personInfo: PersonInfoData,
        context: TileClickContext
    ){
        super(context);
    }
    public execute() {
        const dialogRef = this.dialog.open(PersonInfoDialog, {
        data: this.personInfo,
        panelClass:'dialog',
        backdropClass: 'dialog-blur',
        minWidth: "340px"
        });
    }

}