import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightTurnFinishMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3915;

	public isAfk: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightTurnFinishMessage.protocolId;
    }

    public initGameFightTurnFinishMessage(isAfk: boolean = false): GameFightTurnFinishMessage
    {
        this.isAfk = isAfk;
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
        this.serializeAs_GameFightTurnFinishMessage(output);
    }

    public serializeAs_GameFightTurnFinishMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.isAfk);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightTurnFinishMessage(input);
    }

    private deserializeAs_GameFightTurnFinishMessage(input: ICustomDataInput)
    {
        this._isAfkFunc(input);
    }

    private _isAfkFunc(input: ICustomDataInput)
    {
        this.isAfk = input.readBoolean();
    }

}