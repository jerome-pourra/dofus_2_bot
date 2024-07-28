import { PartyMemberInformations } from "./../../../../../types/game/context/roleplay/party/PartyMemberInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { PartyUpdateMessage } from "./PartyUpdateMessage";

export class PartyNewMemberMessage extends PartyUpdateMessage
{

	public static readonly protocolId: number = 4529;

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
        this.deserializeAs_PartyNewMemberMessage(input);
    }

    private deserializeAs_PartyNewMemberMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}