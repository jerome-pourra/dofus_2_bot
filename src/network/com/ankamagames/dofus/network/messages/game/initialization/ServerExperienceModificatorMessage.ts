import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ServerExperienceModificatorMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9259;

	public experiencePercent: number = 0;

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
        this.deserializeAs_ServerExperienceModificatorMessage(input);
    }

    private deserializeAs_ServerExperienceModificatorMessage(input: ICustomDataInput)
    {
        this._experiencePercentFunc(input);
    }

    private _experiencePercentFunc(input: ICustomDataInput)
    {
        this.experiencePercent = input.readVarUhShort();
        if(this.experiencePercent < 0)
        {
            throw new Error("Forbidden value (" + this.experiencePercent + ") on element of ServerExperienceModificatorMessage.experiencePercent.");
        }
    }

}