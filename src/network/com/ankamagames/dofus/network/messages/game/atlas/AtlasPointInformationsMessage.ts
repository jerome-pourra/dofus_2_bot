import { AtlasPointsInformations } from "./../../../types/game/context/roleplay/AtlasPointsInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AtlasPointInformationsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5424;

	public type: AtlasPointsInformations;

    public constructor()
    {
        super();
        this.type = new AtlasPointsInformations();
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
        this.deserializeAs_AtlasPointInformationsMessage(input);
    }

    private deserializeAs_AtlasPointInformationsMessage(input: ICustomDataInput)
    {
        this.type = new AtlasPointsInformations();
        this.type.deserialize(input);
    }

}