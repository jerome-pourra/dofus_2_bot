import { PaddockInstancesInformations } from "./../../../../../types/game/paddock/PaddockInstancesInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class PaddockPropertiesMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4650;

	public properties: PaddockInstancesInformations;

    public constructor()
    {
        super();
        this.properties = new PaddockInstancesInformations();
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
        this.deserializeAs_PaddockPropertiesMessage(input);
    }

    private deserializeAs_PaddockPropertiesMessage(input: ICustomDataInput)
    {
        this.properties = new PaddockInstancesInformations();
        this.properties.deserialize(input);
    }

}