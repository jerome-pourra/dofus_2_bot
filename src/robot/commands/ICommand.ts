export interface ICommand {

    isActive(): boolean;
    
    active(...args: Array<string>): void;
    deactive(): void;
    toogle(): void;

}