import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightTurnReadyMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9655;

	public isReady: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightTurnReadyMessage.protocolId;
    }

    public initGameFightTurnReadyMessage(isReady: boolean = false): GameFightTurnReadyMessage
    {
        this.isReady = isReady;
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
        this.serializeAs_GameFightTurnReadyMessage(output);
    }

    public serializeAs_GameFightTurnReadyMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.isReady);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightTurnReadyMessage(input);
    }

    private deserializeAs_GameFightTurnReadyMessage(input: ICustomDataInput)
    {
        this._isReadyFunc(input);
    }

    private _isReadyFunc(input: ICustomDataInput)
    {
        this.isReady = input.readBoolean();
    }

}