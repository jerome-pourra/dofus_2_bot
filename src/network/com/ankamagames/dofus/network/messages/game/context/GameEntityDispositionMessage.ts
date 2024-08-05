import { IdentifiedEntityDispositionInformations } from "./../../../types/game/context/IdentifiedEntityDispositionInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameEntityDispositionMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4;

	public disposition: IdentifiedEntityDispositionInformations;

    public constructor()
    {
        super();
        this.disposition = new IdentifiedEntityDispositionInformations();
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
        this.deserializeAs_GameEntityDispositionMessage(input);
    }

    private deserializeAs_GameEntityDispositionMessage(input: ICustomDataInput)
    {
        this.disposition = new IdentifiedEntityDispositionInformations();
        this.disposition.deserialize(input);
    }

}