import { AlterationInfo } from "./../../../../types/game/character/alteration/AlterationInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AlterationAddedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8844;

	public alteration: AlterationInfo;

    public constructor()
    {
        super();
        this.alteration = new AlterationInfo();
    }

    public getMessageId()
    {
        return AlterationAddedMessage.protocolId;
    }

    public initAlterationAddedMessage(alteration: AlterationInfo = null): AlterationAddedMessage
    {
        this.alteration = alteration;
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
        this.serializeAs_AlterationAddedMessage(output);
    }

    public serializeAs_AlterationAddedMessage(output: ICustomDataOutput)
    {
        this.alteration.serializeAs_AlterationInfo(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AlterationAddedMessage(input);
    }

    private deserializeAs_AlterationAddedMessage(input: ICustomDataInput)
    {
        this.alteration = new AlterationInfo();
        this.alteration.deserialize(input);
    }

}