import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";

export class SocialFightInfo implements INetworkType
{

	public static readonly protocolId: number = 2355;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public fightId: number = 0;
	public fightType: number = 0;
	public mapId: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return SocialFightInfo.protocolId;
    }

    public isEndpointClient()
    {
        return SocialFightInfo.endpointClient;
    }

    public isEndpointServer()
    {
        return SocialFightInfo.endpointServer;
    }

    public initSocialFightInfo(fightId: number = 0, fightType: number = 0, mapId: number = 0): SocialFightInfo
    {
        this.fightId = fightId;
        this.fightType = fightType;
        this.mapId = mapId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SocialFightInfo(output);
    }

    public serializeAs_SocialFightInfo(output: ICustomDataOutput)
    {
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element fightId.");
        }
        output.writeVarShort(this.fightId);
        output.writeByte(this.fightType);
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialFightInfo(input);
    }

    private deserializeAs_SocialFightInfo(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._fightTypeFunc(input);
        this._mapIdFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of SocialFightInfo.fightId.");
        }
    }

    private _fightTypeFunc(input: ICustomDataInput)
    {
        this.fightType = input.readByte();
        if(this.fightType < 0)
        {
            throw new Error("Forbidden value (" + this.fightType + ") on element of SocialFightInfo.fightType.");
        }
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of SocialFightInfo.mapId.");
        }
    }

}