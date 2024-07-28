import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightNewRoundMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8261;

	public roundNumber: number = 0;

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
        this.deserializeAs_GameFightNewRoundMessage(input);
    }

    private deserializeAs_GameFightNewRoundMessage(input: ICustomDataInput)
    {
        this._roundNumberFunc(input);
    }

    private _roundNumberFunc(input: ICustomDataInput)
    {
        this.roundNumber = input.readVarUhInt();
        if(this.roundNumber < 0)
        {
            throw new Error("Forbidden value (" + this.roundNumber + ") on element of GameFightNewRoundMessage.roundNumber.");
        }
    }

}