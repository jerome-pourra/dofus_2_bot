import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceApplicationDeletedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8801;

	public deleted: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceApplicationDeletedMessage.protocolId;
    }

    public initAllianceApplicationDeletedMessage(deleted: boolean = false): AllianceApplicationDeletedMessage
    {
        this.deleted = deleted;
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
        this.serializeAs_AllianceApplicationDeletedMessage(output);
    }

    public serializeAs_AllianceApplicationDeletedMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.deleted);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceApplicationDeletedMessage(input);
    }

    private deserializeAs_AllianceApplicationDeletedMessage(input: ICustomDataInput)
    {
        this._deletedFunc(input);
    }

    private _deletedFunc(input: ICustomDataInput)
    {
        this.deleted = input.readBoolean();
    }

}