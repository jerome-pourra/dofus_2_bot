import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { GameMapMovementMessage } from "./GameMapMovementMessage";

export class GameCautiousMapMovementMessage extends GameMapMovementMessage implements INetworkMessage
{

	public static readonly protocolId: number = 779;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameCautiousMapMovementMessage.protocolId;
    }

    public initGameCautiousMapMovementMessage(keyMovements: Array<number> = null, forcedDirection: number = 0, actorId: number = 0): GameCautiousMapMovementMessage
    {
        super.initGameMapMovementMessage(keyMovements,forcedDirection,actorId);
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
        this.serializeAs_GameCautiousMapMovementMessage(output);
    }

    public serializeAs_GameCautiousMapMovementMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameMapMovementMessage(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameCautiousMapMovementMessage(input);
    }

    private deserializeAs_GameCautiousMapMovementMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}