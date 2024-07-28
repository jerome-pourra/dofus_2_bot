import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AbstractContactInformations } from "./AbstractContactInformations";

export class AcquaintanceInformation extends AbstractContactInformations
{

	public static readonly protocolId: number = 1584;

	public playerState: number = 99;

    public constructor()
    {
        super();
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AcquaintanceInformation(input);
    }

    private deserializeAs_AcquaintanceInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerStateFunc(input);
    }

    private _playerStateFunc(input: ICustomDataInput)
    {
        this.playerState = input.readByte();
        if(this.playerState < 0)
        {
            throw new Error("Forbidden value (" + this.playerState + ") on element of AcquaintanceInformation.playerState.");
        }
    }

}