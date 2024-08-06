import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6325;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightPlacementSwapPositionsErrorMessage.protocolId;
    }

    public initGameFightPlacementSwapPositionsErrorMessage(): GameFightPlacementSwapPositionsErrorMessage
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
        this.serializeAs_GameFightPlacementSwapPositionsErrorMessage(output);
    }

    public serializeAs_GameFightPlacementSwapPositionsErrorMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightPlacementSwapPositionsErrorMessage(input);
    }

    private deserializeAs_GameFightPlacementSwapPositionsErrorMessage(input: ICustomDataInput)
    {

    }

}