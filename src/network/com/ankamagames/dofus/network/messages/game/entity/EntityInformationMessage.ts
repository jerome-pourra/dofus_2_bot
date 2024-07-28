import { EntityInformation } from "./../../../types/game/entity/EntityInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class EntityInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6850;

	public entity: EntityInformation;

    public constructor()
    {
        super();
        this.entity = new EntityInformation();
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
        this.deserializeAs_EntityInformationMessage(input);
    }

    private deserializeAs_EntityInformationMessage(input: ICustomDataInput)
    {
        this.entity = new EntityInformation();
        this.entity.deserialize(input);
    }

}