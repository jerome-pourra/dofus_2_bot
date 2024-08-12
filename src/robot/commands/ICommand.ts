export interface ICommand {

    isActive(): boolean;
    
    active(...args: Array<string>): void;
    deactive(...args: Array<string>): void;
    toogle(...args: Array<string>): void;

}