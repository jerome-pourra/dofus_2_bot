import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ServerExperienceModificatorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9259;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public experiencePercent: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ServerExperienceModificatorMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ServerExperienceModificatorMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ServerExperienceModificatorMessage.endpointServer;
    }

    public initServerExperienceModificatorMessage(experiencePercent: number = 0): ServerExperienceModificatorMessage
    {
        this.experiencePercent = experiencePercent;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ServerExperienceModificatorMessage(output);
    }

    public serializeAs_ServerExperienceModificatorMessage(output: ICustomDataOutput)
    {
        if(this.experiencePercent < 0)
        {
            throw new Error("Forbidden value (" + this.experiencePercent + ") on element experiencePercent.");
        }
        output.writeVarShort(this.experiencePercent);
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