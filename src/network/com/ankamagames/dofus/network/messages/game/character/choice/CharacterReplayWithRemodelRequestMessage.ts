import { CharacterReplayRequestMessage } from "./../replay/CharacterReplayRequestMessage";
import { RemodelingInformation } from "./../../../../types/game/character/choice/RemodelingInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class CharacterReplayWithRemodelRequestMessage extends CharacterReplayRequestMessage
{

	public static readonly protocolId: number = 338;

	public remodel: RemodelingInformation;

    public constructor()
    {
        super();
        this.remodel = new RemodelingInformation();
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
        this.deserializeAs_CharacterReplayWithRemodelRequestMessage(input);
    }

    private deserializeAs_CharacterReplayWithRemodelRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.remodel = new RemodelingInformation();
        this.remodel.deserialize(input);
    }

}