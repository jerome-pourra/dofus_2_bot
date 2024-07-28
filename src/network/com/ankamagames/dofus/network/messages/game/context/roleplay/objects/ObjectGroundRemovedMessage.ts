import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ObjectGroundRemovedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5855;

	public cell: number = 0;

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
        this.deserializeAs_ObjectGroundRemovedMessage(input);
    }

    private deserializeAs_ObjectGroundRemovedMessage(input: ICustomDataInput)
    {
        this._cellFunc(input);
    }

    private _cellFunc(input: ICustomDataInput)
    {
        this.cell = input.readVarUhShort();
        if(this.cell < 0 || this.cell > 559)
        {
            throw new Error("Forbidden value (" + this.cell + ") on element of ObjectGroundRemovedMessage.cell.");
        }
    }

}