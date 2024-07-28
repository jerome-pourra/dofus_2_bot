import { IdentifiedEntityDispositionInformations } from "./../../../../types/game/context/IdentifiedEntityDispositionInformations";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightPlacementSwapPositionsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5606;

	public dispositions: Array<IdentifiedEntityDispositionInformations>;

    public constructor()
    {
        super();
        this.dispositions = Array<IdentifiedEntityDispositionInformations>(2);
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
        this.deserializeAs_GameFightPlacementSwapPositionsMessage(input);
    }

    private deserializeAs_GameFightPlacementSwapPositionsMessage(input: ICustomDataInput)
    {
        for(let _i1: number = 0; _i1 < 2; _i1++)
        {
            this.dispositions[_i1] = new IdentifiedEntityDispositionInformations();
            this.dispositions[_i1].deserialize(input);
        }
    }

}