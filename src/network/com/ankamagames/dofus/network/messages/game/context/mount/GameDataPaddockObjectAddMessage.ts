import { PaddockItem } from "./../../../../types/game/paddock/PaddockItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameDataPaddockObjectAddMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 652;

	public paddockItemDescription: PaddockItem;

    public constructor()
    {
        super();
        this.paddockItemDescription = new PaddockItem();
    }

    public getMessageId()
    {
        return GameDataPaddockObjectAddMessage.protocolId;
    }

    public initGameDataPaddockObjectAddMessage(paddockItemDescription: PaddockItem = null): GameDataPaddockObjectAddMessage
    {
        this.paddockItemDescription = paddockItemDescription;
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
        this.serializeAs_GameDataPaddockObjectAddMessage(output);
    }

    public serializeAs_GameDataPaddockObjectAddMessage(output: ICustomDataOutput)
    {
        this.paddockItemDescription.serializeAs_PaddockItem(output);
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