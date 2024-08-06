import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightTurnStartPlayingMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3867;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightTurnStartPlayingMessage.protocolId;
    }

    public initGameFightTurnStartPlayingMessage(): GameFightTurnStartPlayingMessage
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
        this.serializeAs_GameFightTurnStartPlayingMessage(output);
    }

    public serializeAs_GameFightTurnStartPlayingMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightTurnStartPlayingMessage(input);
    }

    private deserializeAs_GameFightTurnStartPlayingMessage(input: ICustomDataInput)
    {

    }

}