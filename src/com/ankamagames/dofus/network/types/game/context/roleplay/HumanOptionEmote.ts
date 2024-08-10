import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionEmote extends HumanOption implements INetworkType
{

	public static readonly protocolId: number = 7646;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public emoteId: number = 0;
	public emoteStartTime: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return HumanOptionEmote.protocolId;
    }

    public isEndpointClient()
    {
        return HumanOptionEmote.endpointClient;
    }

    public isEndpointServer()
    {
        return HumanOptionEmote.endpointServer;
    }

    public initHumanOptionEmote(emoteId: number = 0, emoteStartTime: number = 0): HumanOptionEmote
    {
        this.emoteId = emoteId;
        this.emoteStartTime = emoteStartTime;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOptionEmote(output);
    }

    public serializeAs_HumanOptionEmote(output: ICustomDataOutput)
    {
        super.serializeAs_HumanOption(output);
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element emoteId.");
        }
        output.writeShort(this.emoteId);
        if(this.emoteStartTime < -9007199254740992 || this.emoteStartTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.emoteStartTime + ") on element emoteStartTime.");
        }
        output.writeDouble(this.emoteStartTime);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionEmote(input);
    }

    private deserializeAs_HumanOptionEmote(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._emoteIdFunc(input);
        this._emoteStartTimeFunc(input);
    }

    private _emoteIdFunc(input: ICustomDataInput)
    {
        this.emoteId = input.readUnsignedShort();
        if(this.emoteId < 0 || this.emoteId > 65535)
        {
            throw new Error("Forbidden value (" + this.emoteId + ") on element of HumanOptionEmote.emoteId.");
        }
    }

    private _emoteStartTimeFunc(input: ICustomDataInput)
    {
        this.emoteStartTime = input.readDouble();
        if(this.emoteStartTime < -9007199254740992 || this.emoteStartTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.emoteStartTime + ") on element of HumanOptionEmote.emoteStartTime.");
        }
    }

}