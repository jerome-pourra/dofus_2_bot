import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class SurrenderStateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6944;

	public canSurrender: boolean = false;
	public permitVote: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SurrenderStateMessage.protocolId;
    }

    public initSurrenderStateMessage(canSurrender: boolean = false, permitVote: boolean = false): SurrenderStateMessage
    {
        this.canSurrender = canSurrender;
        this.permitVote = permitVote;
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
        this.serializeAs_SurrenderStateMessage(output);
    }

    public serializeAs_SurrenderStateMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.canSurrender);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.permitVote);
        output.writeByte(_box0);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SurrenderStateMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.canSurrender = BooleanByteWrapper.getFlag(_box0,0);
        this.permitVote = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_SurrenderStateMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
    }

}