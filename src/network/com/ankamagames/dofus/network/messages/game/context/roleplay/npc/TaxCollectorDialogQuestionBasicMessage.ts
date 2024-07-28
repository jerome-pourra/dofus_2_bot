import { BasicAllianceInformations } from "./../../../../../types/game/context/roleplay/BasicAllianceInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TaxCollectorDialogQuestionBasicMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3500;

	public allianceInfo: BasicAllianceInformations;

    public constructor()
    {
        super();
        this.allianceInfo = new BasicAllianceInformations();
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
        this.deserializeAs_TaxCollectorDialogQuestionBasicMessage(input);
    }

    private deserializeAs_TaxCollectorDialogQuestionBasicMessage(input: ICustomDataInput)
    {
        this.allianceInfo = new BasicAllianceInformations();
        this.allianceInfo.deserialize(input);
    }

}