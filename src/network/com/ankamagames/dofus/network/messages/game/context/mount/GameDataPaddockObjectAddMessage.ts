import { PaddockItem } from "./../../../../types/game/paddock/PaddockItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameDataPaddockObjectAddMessage extends NetworkMessage
{

	public static readonly protocolId: number = 652;

	public paddockItemDescription: PaddockItem;

    public constructor()
    {
        super();
        this.paddockItemDescription = new PaddockItem();
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
        this.deserializeAs_GameDataPaddockObjectAddMessage(input);
    }

    private deserializeAs_GameDataPaddockObjectAddMessage(input: ICustomDataInput)
    {
        this.paddockItemDescription = new PaddockItem();
        this.paddockItemDescription.deserialize(input);
    }

}