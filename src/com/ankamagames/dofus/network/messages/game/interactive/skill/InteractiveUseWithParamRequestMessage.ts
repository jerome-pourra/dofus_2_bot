import { InteractiveUseRequestMessage } from "./../InteractiveUseRequestMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class InteractiveUseWithParamRequestMessage extends InteractiveUseRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8117;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return InteractiveUseWithParamRequestMessage.protocolId;
    }

    public initInteractiveUseWithParamRequestMessage(elemId: number = 0, skillInstanceUid: number = 0, id: number = 0): InteractiveUseWithParamRequestMessage
    {
        super.initInteractiveUseRequestMessage(elemId,skillInstanceUid);
        this.id = id;
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
        this.serializeAs_InteractiveUseWithParamRequestMessage(output);
    }

    public serializeAs_InteractiveUseWithParamRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_InteractiveUseRequestMessage(output);
        output.writeInt(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_InteractiveUseWithParamRequestMessage(input);
    }

    private deserializeAs_InteractiveUseWithParamRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readInt();
    }

}