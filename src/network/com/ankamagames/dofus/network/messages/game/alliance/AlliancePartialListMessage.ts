import { AllianceFactSheetInformation } from "./../../../types/game/social/AllianceFactSheetInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { AllianceListMessage } from "./AllianceListMessage";

export class AlliancePartialListMessage extends AllianceListMessage
{

	public static readonly protocolId: number = 4178;

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
        this.deserializeAs_AlliancePartialListMessage(input);
    }

    private deserializeAs_AlliancePartialListMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
    }

}