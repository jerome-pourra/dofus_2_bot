import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GameMapMovementRequestMessage } from "./GameMapMovementRequestMessage";

export class GameCautiousMapMovementRequestMessage extends GameMapMovementRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 920;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameCautiousMapMovementRequestMessage.protocolId;
    }

    public initGameCautiousMapMovementRequestMessage(keyMovements: Array<number> = null, mapId: number = 0): GameCautiousMapMovementRequestMessage
    {
        super.initGameMapMovementRequestMessage(keyMovements,mapId);
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
        this.serializeAs_GameCautiousMapMovementRequestMessage(output);
    }

    public serializeAs_GameCautiousMapMovementRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameMapMovementRequestMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameCautiousMapMovementRequestMessage(input);
    }

    private deserializeAs_GameCautiousMapMovementRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}