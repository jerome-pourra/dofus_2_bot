import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { PlayerStatus } from "./PlayerStatus";

export class PlayerStatusExtended extends PlayerStatus
{

	public static readonly protocolId: number = 8257;

	public message: string = "";

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerStatusExtended(input);
    }

    private deserializeAs_PlayerStatusExtended(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._messageFunc(input);
    }

    private _messageFunc(input: ICustomDataInput)
    {
        this.message = input.readUTF();
    }

}