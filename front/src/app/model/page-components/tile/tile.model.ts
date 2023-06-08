import { AbstractTileClickCommand } from "./cmd/abstr-tile-click.command";

export interface TileModel{
    title: string;
    desc: string;
    imgUrl: string;
    clickCommand: AbstractTileClickCommand;
}