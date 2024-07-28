import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { AlliancePlayerApplicationAbstractMessage } from "./AlliancePlayerApplicationAbstractMessage";

export class AlliancePlayerNoApplicationInformationMessage extends AlliancePlayerApplicationAbstractMessage
{

	public static readonly protocolId: number = 7142;

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
        this.deserializeAs_AlliancePlayerNoApplicationInformationMessage(input);
    }

    private deserializeAs_AlliancePlayerNoApplicationInformationMessage(input: ICustomDataInput)
    {

    }

}