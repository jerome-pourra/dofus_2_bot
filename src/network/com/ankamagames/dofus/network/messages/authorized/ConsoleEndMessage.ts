import { Uuid } from "./../../types/game/Uuid";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ConsoleEndMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9802;

	public consoleUuid: Uuid;
	public isSuccess: boolean = false;

    public constructor()
    {
        super();
        this.consoleUuid = new Uuid();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ConsoleEndMessage(input);
    }

    private deserializeAs_ConsoleEndMessage(input: ICustomDataInput)
    {
        this.consoleUuid = new Uuid();
        this.consoleUuid.deserialize(input);
        this._isSuccessFunc(input);
    }

    private _isSuccessFunc(input: ICustomDataInput)
    {
        this.isSuccess = input.readBoolean();
    }

}