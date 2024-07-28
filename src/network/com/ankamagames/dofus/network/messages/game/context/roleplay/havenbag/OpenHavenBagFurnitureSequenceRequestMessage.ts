import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class OpenHavenBagFurnitureSequenceRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7398;

    public constructor()
    {
        super();
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
        this.deserializeAs_OpenHavenBagFurnitureSequenceRequestMessage(input);
    }

    private deserializeAs_OpenHavenBagFurnitureSequenceRequestMessage(input: ICustomDataInput)
    {

    }

}