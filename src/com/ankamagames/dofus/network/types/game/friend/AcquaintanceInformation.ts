import { AccountTagInformation } from "./../../common/AccountTagInformation";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { AbstractContactInformations } from "./AbstractContactInformations";

export class AcquaintanceInformation extends AbstractContactInformations implements INetworkType
{

	public static readonly protocolId: number = 1584;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public playerState: number = 99;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return AcquaintanceInformation.protocolId;
    }

    public isEndpointClient()
    {
        return AcquaintanceInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return AcquaintanceInformation.endpointServer;
    }

    public initAcquaintanceInformation(accountId: number = 0, accountTag: AccountTagInformation = null, playerState: number = 99): AcquaintanceInformation
    {
        super.initAbstractContactInformations(accountId,accountTag);
        this.playerState = playerState;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AcquaintanceInformation(output);
    }

    public serializeAs_AcquaintanceInformation(output: ICustomDataOutput)
    {
        super.serializeAs_AbstractContactInformations(output);
        output.writeByte(this.playerState);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AcquaintanceInformation(input);
    }

    private deserializeAs_AcquaintanceInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerStateFunc(input);
    }

    private _playerStateFunc(input: ICustomDataInput)
    {
        this.playerState = input.readByte();
        if(this.playerState < 0)
        {
            throw new Error("Forbidden value (" + this.playerState + ") on element of AcquaintanceInformation.playerState.");
        }
    }

}