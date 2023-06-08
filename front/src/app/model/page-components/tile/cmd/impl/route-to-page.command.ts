import { AbstractTileClickCommand } from "../abstr-tile-click.command";
import { TileClickContext } from "../tile-click.context";

export class RouteToPageCommand extends AbstractTileClickCommand{
    constructor(
        protected routeUrl: String,
        context: TileClickContext
    ){
        super(context);
    }
    public execute() {
        this.context.router.navigate([this.routeUrl]);
    }
}