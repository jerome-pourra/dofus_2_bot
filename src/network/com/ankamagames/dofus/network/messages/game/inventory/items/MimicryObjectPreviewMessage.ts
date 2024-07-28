import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MimicryObjectPreviewMessage extends NetworkMessage
{

	public static readonly protocolId: number = 2255;

	public result: ObjectItem;

    public constructor()
    {
        super();
        this.result = new ObjectItem();
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
        this.deserializeAs_MimicryObjectPreviewMessage(input);
    }

    private deserializeAs_MimicryObjectPreviewMessage(input: ICustomDataInput)
    {
        this.result = new ObjectItem();
        this.result.deserialize(input);
    }

}