import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightTurnFinishMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3915;

	public isAfk: boolean = false;

    public constructor()
    {
        super();
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