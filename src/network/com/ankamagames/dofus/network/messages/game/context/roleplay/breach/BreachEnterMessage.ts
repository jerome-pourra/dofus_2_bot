import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachEnterMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9138;

	public owner: number = 0;

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
        this.deserializeAs_BreachEnterMessage(input);
    }

    private deserializeAs_BreachEnterMessage(input: ICustomDataInput)
    {
        this._ownerFunc(input);
    }

    private _ownerFunc(input: ICustomDataInput)
    {
        this.owner = input.readVarUhLong();
        if(this.owner < 0 || this.owner > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.owner + ") on element of BreachEnterMessage.owner.");
        }
    }

}