import { PaddockInstancesInformations } from "./../../../../../types/game/paddock/PaddockInstancesInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PaddockPropertiesMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4650;

	public properties: PaddockInstancesInformations;

    public constructor()
    {
        super();
        this.properties = new PaddockInstancesInformations();
    }

    public getMessageId()
    {
        return PaddockPropertiesMessage.protocolId;
    }

    public initPaddockPropertiesMessage(properties: PaddockInstancesInformations = null): PaddockPropertiesMessage
    {
        this.properties = properties;
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
        this.serializeAs_PaddockPropertiesMessage(output);
    }

    public serializeAs_PaddockPropertiesMessage(output: ICustomDataOutput)
    {
        this.properties.serializeAs_PaddockInstancesInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PaddockPropertiesMessage(input);
    }

    private deserializeAs_PaddockPropertiesMessage(input: ICustomDataInput)
    {
        this.properties = new PaddockInstancesInformations();
        this.properties.deserialize(input);
    }

}