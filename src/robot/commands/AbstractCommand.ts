import { RobotAccessor } from "../RobotAccessor";
import { ICommand } from "./ICommand";

export abstract class AbstractCommand extends RobotAccessor implements ICommand {
    
    public abstract isActive(): boolean;

    public abstract active(...args: Array<string>): void;
    public abstract deactive(...args: Array<string>): void;
    public abstract toogle(...args: Array<string>): void;

}