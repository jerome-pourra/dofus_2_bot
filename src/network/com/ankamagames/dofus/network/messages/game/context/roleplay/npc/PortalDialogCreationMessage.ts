import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NpcDialogCreationMessage } from "./NpcDialogCreationMessage";

export class PortalDialogCreationMessage extends NpcDialogCreationMessage
{

	public static readonly protocolId: number = 6302;

	public type: number = 0;

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
        this.deserializeAs_PortalDialogCreationMessage(input);
    }

    private deserializeAs_PortalDialogCreationMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._typeFunc(input);
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readInt();
        if(this.type < 0)
        {
            throw new Error("Forbidden value (" + this.type + ") on element of PortalDialogCreationMessage.type.");
        }
    }

}