import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NpcDialogCreationMessage } from "./NpcDialogCreationMessage";

export class PortalDialogCreationMessage extends NpcDialogCreationMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6302;

	public type: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return PortalDialogCreationMessage.protocolId;
    }

    public initPortalDialogCreationMessage(mapId: number = 0, npcId: number = 0, type: number = 0): PortalDialogCreationMessage
    {
        super.initNpcDialogCreationMessage(mapId,npcId);
        this.type = type;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PortalDialogCreationMessage(output);
    }

    public serializeAs_PortalDialogCreationMessage(output: ICustomDataOutput)
    {
        super.serializeAs_NpcDialogCreationMessage(output);
        output.writeInt(this.type);
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