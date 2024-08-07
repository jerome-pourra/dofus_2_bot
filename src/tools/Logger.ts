export class Logger {

    private static readonly RESET: string = "\x1b[0m"
    // private static BRIGHT = "\x1b[1m"
    // private static DIM = "\x1b[2m"
    // private static UNDERSCORE = "\x1b[4m"
    // private static BLINK = "\x1b[5m"
    // private static REVERSE = "\x1b[7m"
    // private static HIDDEN = "\x1b[8m"

    private static readonly F_BLACK: string = "\x1b[30m"
    private static readonly F_RED: string = "\x1b[31m"
    private static readonly F_GREEN: string = "\x1b[32m"
    private static readonly F_YELLOW: string = "\x1b[33m"
    private static readonly F_BLUE: string = "\x1b[34m"
    private static readonly F_MAGENTA: string = "\x1b[35m"
    private static readonly F_CYAN: string = "\x1b[36m"
    private static readonly F_WHITE: string = "\x1b[37m"
    private static readonly F_GRAY: string = "\x1b[90m"

    private static readonly BG_BLACK: string = "\x1b[40m"
    private static readonly BG_RED: string = "\x1b[41m"
    private static readonly BG_GREEN: string = "\x1b[42m"
    private static readonly BG_YELLOW: string = "\x1b[43m"
    private static readonly BG_BLUE: string = "\x1b[44m"
    private static readonly BG_MAGENTA: string = "\x1b[45m"
    private static readonly BG_CYAN: string = "\x1b[46m"
    private static readonly BG_WHITE: string = "\x1b[47m"
    private static readonly BG_GRAY: string = "\x1b[100m"

    public static log(msg: string, ...args: any[]): void {
        this.print(console.log, Logger.F_WHITE, msg, ...args);
    }

    public static info(msg: string, ...args: any[]): void {
        this.print(console.info, Logger.F_CYAN, msg, ...args);
    }

    public static warn(msg: string, ...args: any[]): void {
        this.print(console.warn, Logger.F_YELLOW, msg, ...args);
    }

    public static error(msg: string, ...args: any[]): void {
        this.print(console.error, Logger.F_RED, msg, ...args);
    }

    private static wrapExpression(expression: string, defaultColor: string): string {
        expression = this.wrapColorExpression(expression, defaultColor);
        expression = this.wrapBackgroundColorExpression(expression, defaultColor);
        return expression;
    }

    private static wrapColorExpression(expression: string, defaultColor: string): string {

        let colorsList = [
            { exp: "black", code: Logger.F_BLACK },
            { exp: "red", code: Logger.F_RED },
            { exp: "green", code: Logger.F_GREEN },
            { exp: "yellow", code: Logger.F_YELLOW },
            { exp: "blue", code: Logger.F_BLUE },
            { exp: "magenta", code: Logger.F_MAGENTA },
            { exp: "cyan", code: Logger.F_CYAN },
            { exp: "white", code: Logger.F_WHITE },
            { exp: "gray", code: Logger.F_GRAY }
        ];

        for (let i = 0; i < colorsList.length; i++) {
            expression = this.processMatchesExpressions(colorsList[i], expression, defaultColor);
        }

        return expression;

    }

    private static wrapBackgroundColorExpression(expression: string, defaultColor: string): string {

        let bgColorsList = [
            { exp: "bgblack", code: Logger.BG_BLACK },
            { exp: "bgred", code: Logger.BG_RED },
            { exp: "bggreen", code: Logger.BG_GREEN },
            { exp: "bgyellow", code: Logger.BG_YELLOW },
            { exp: "bgblue", code: Logger.BG_BLUE },
            { exp: "bgmagenta", code: Logger.BG_MAGENTA },
            { exp: "bgcyan", code: Logger.BG_CYAN },
            { exp: "bgwhite", code: Logger.BG_WHITE },
            { exp: "bggray", code: Logger.BG_GRAY }
        ];

        for (let i = 0; i < bgColorsList.length; i++) {
            expression = this.processMatchesExpressions(bgColorsList[i], expression, defaultColor);
        }

        return expression;

    }

    private static processMatchesExpressions(color: {exp: string, code: string}, expression: string, defaultColor: string): string {

        let regex = new RegExp(`\\<${color.exp}\\>(.*?)\\<\\/${color.exp}\\>`, "g");
        return expression.replace(regex, (match: string, p1: string) => {
            return Logger.RESET + color.code + p1 + Logger.RESET + defaultColor;
        });

    }

    private static print(console: (message?: any, ...optionalParams: any[]) => void, color: string, msg: string, ...args: any[]): void {
        let colorFullMsg = color + this.wrapExpression(msg, color) + Logger.RESET;
        console(colorFullMsg, ...args);
    }

}