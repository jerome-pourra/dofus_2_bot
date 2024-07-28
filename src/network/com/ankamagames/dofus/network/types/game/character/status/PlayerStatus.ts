import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class PlayerStatus
{

	public static readonly protocolId: number = 2273;

	public statusId: number = 1;

    public constructor()
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerStatus(input);
    }

    private deserializeAs_PlayerStatus(input: ICustomDataInput)
    {
        this._statusIdFunc(input);
    }

    private _statusIdFunc(input: ICustomDataInput)
    {
        this.statusId = input.readByte();
        if(this.statusId < 0)
        {
            throw new Error("Forbidden value (" + this.statusId + ") on element of PlayerStatus.statusId.");
        }
    }

}