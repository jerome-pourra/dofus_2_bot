export class Logger {

    public static C = {
        N: {
            Black: "0;30",
            Red: "0;31",
            Green: "0;32",
            Yellow: "0;33",
            Blue: "0;34",
            Purple: "0;35",
            Cyan: "0;36",
            Gray: "0;37"
        },
        B: {
            Black: "1;30",
            Red: "1;31",
            Green: "1;32",
            Yellow: "1;33",
            Blue: "1;34",
            Purple: "1;35",
            Cyan: "1;36",
            Gray: "1;37"
        }
    };

    public static Coloring(msg: string, color: string, ...args: any[]): string {
        return Logger.ColorEncapsulate(color, msg)
    }

    public static Log(msg: string, ...args: any[]): void {
        Logger.PrintDefault(msg, ...args);
    }

    public static Info(msg: string, ...args: any[]): void {
        Logger.Print(Logger.C.B.Cyan, msg, ...args);
    }

    public static Success(msg: string, ...args: any[]): void {
        Logger.Print(Logger.C.B.Green, msg, ...args);
    }

    public static Warn(msg: string, ...args: any[]): void {
        Logger.Print(Logger.C.B.Yellow, msg, ...args);
    }

    public static Error(msg: string, ...args: any[]): void {
        Logger.Print(Logger.C.B.Red, msg, ...args);
    }

    private static Print(color: string, msg: string, ...args: any[]): void {
        let msgColor = Logger.ColorEncapsulate(color, msg);
        console.log(msgColor, ...args);
    }

    private static PrintDefault(msg: string, ...args: any[]): void {
        console.log(msg, ...args);
    }

    private static ColorEncapsulate(color: string, msg: string): string {
        return "\x1b[" + color + "m" + msg + "\x1b[0;0m";
    }

}