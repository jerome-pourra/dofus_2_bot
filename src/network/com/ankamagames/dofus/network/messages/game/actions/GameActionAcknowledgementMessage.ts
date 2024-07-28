import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameActionAcknowledgementMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5751;

	public valid: boolean = false;
	public actionId: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_GameActionAcknowledgementMessage(input);
    }

    private deserializeAs_GameActionAcknowledgementMessage(input: ICustomDataInput)
    {
        this._validFunc(input);
        this._actionIdFunc(input);
    }

    private _validFunc(input: ICustomDataInput)
    {
        this.valid = input.readBoolean();
    }

    private _actionIdFunc(input: ICustomDataInput)
    {
        this.actionId = input.readByte();
    }

}