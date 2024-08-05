import { Version } from "./../../types/version/Version";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { IdentificationFailedMessage } from "./IdentificationFailedMessage";

export class IdentificationFailedForBadVersionMessage extends IdentificationFailedMessage
{

	public static readonly protocolId: number = 4124;

	public requiredVersion: Version;

    public constructor()
    {
        super();
        this.requiredVersion = new Version();
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
        this.deserializeAs_IdentificationFailedForBadVersionMessage(input);
    }

    private deserializeAs_IdentificationFailedForBadVersionMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.requiredVersion = new Version();
        this.requiredVersion.deserialize(input);
    }

}