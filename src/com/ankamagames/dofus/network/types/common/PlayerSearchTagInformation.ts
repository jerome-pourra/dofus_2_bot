import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";
import { AccountTagInformation } from "./AccountTagInformation";
import { AbstractPlayerSearchInformation } from "./AbstractPlayerSearchInformation";

export class PlayerSearchTagInformation extends AbstractPlayerSearchInformation implements INetworkType
{

	public static readonly protocolId: number = 3389;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public tag: AccountTagInformation;

    public constructor()
    {
        super();
        this.tag = new AccountTagInformation();
    }

    public getTypeId()
    {
        return PlayerSearchTagInformation.protocolId;
    }

    public isEndpointClient()
    {
        return PlayerSearchTagInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return PlayerSearchTagInformation.endpointServer;
    }

    public initPlayerSearchTagInformation(tag: AccountTagInformation = null): PlayerSearchTagInformation
    {
        this.tag = tag;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PlayerSearchTagInformation(output);
    }

    public serializeAs_PlayerSearchTagInformation(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractPlayerSearchInformation(output);
        this.tag.serializeAs_AccountTagInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PlayerSearchTagInformation(input);
    }

    private deserializeAs_PlayerSearchTagInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.tag = new AccountTagInformation();
        this.tag.deserialize(input);
    }

}