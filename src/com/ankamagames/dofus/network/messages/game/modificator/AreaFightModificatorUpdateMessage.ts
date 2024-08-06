import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AreaFightModificatorUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9461;

	public spellPairId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AreaFightModificatorUpdateMessage.protocolId;
    }

    public initAreaFightModificatorUpdateMessage(spellPairId: number = 0): AreaFightModificatorUpdateMessage
    {
        this.spellPairId = spellPairId;
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
        this.serializeAs_AreaFightModificatorUpdateMessage(output);
    }

    public serializeAs_AreaFightModificatorUpdateMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.spellPairId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AreaFightModificatorUpdateMessage(input);
    }

    private deserializeAs_AreaFightModificatorUpdateMessage(input: ICustomDataInput)
    {
        this._spellPairIdFunc(input);
    }

    private _spellPairIdFunc(input: ICustomDataInput)
    {
        this.spellPairId = input.readInt();
    }

}