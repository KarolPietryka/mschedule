import { TileClickContext } from "./tile-click.context";

export abstract class AbstractTileClickCommand{
    constructor(protected context: TileClickContext){}
    public abstract execute()
}