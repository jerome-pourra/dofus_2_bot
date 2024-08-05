import { EntityInformation } from "./../../../types/game/entity/EntityInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class EntitiesInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 266;

	public entities: Array<EntityInformation>;

    public constructor()
    {
        super();
        this.entities = Array<EntityInformation>();
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
        this.deserializeAs_EntitiesInformationMessage(input);
    }

    private deserializeAs_EntitiesInformationMessage(input: ICustomDataInput)
    {
        let _item1: EntityInformation;
        let _entitiesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _entitiesLen; _i1++)
        {
            _item1 = new EntityInformation();
            _item1.deserialize(input);
            this.entities.push(_item1);
        }
    }

}