import { KothWinner } from "./../../../types/game/alliance/KothWinner";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class KothEndMessage extends NetworkMessage
{

	public static readonly protocolId: number = 506;

	public winner: KothWinner;

    public constructor()
    {
        super();
        this.winner = new KothWinner();
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
        this.deserializeAs_KothEndMessage(input);
    }

    private deserializeAs_KothEndMessage(input: ICustomDataInput)
    {
        this.winner = new KothWinner();
        this.winner.deserialize(input);
    }

}