import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class DebugClearHighlightCellsMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3737;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DebugClearHighlightCellsMessage.protocolId;
    }

    public initDebugClearHighlightCellsMessage(): DebugClearHighlightCellsMessage
    {
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
        this.serializeAs_DebugClearHighlightCellsMessage(output);
    }

    public serializeAs_DebugClearHighlightCellsMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DebugClearHighlightCellsMessage(input);
    }

    private deserializeAs_DebugClearHighlightCellsMessage(input: ICustomDataInput)
    {

    }

}