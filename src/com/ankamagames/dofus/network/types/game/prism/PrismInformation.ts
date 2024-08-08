import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class PrismInformation implements INetworkType
{

	public static readonly protocolId: number = 65;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public state: number = 1;
	public placementDate: number = 0;
	public nuggetsCount: number = 0;
	public durability: number = 0;
	public nextEvolutionDate: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return PrismInformation.protocolId;
    }

    public isEndpointClient()
    {
        return PrismInformation.endpointClient;
    }

    public isEndpointServer()
    {
        return PrismInformation.endpointServer;
    }

    public initPrismInformation(state: number = 1, placementDate: number = 0, nuggetsCount: number = 0, durability: number = 0, nextEvolutionDate: number = 0): PrismInformation
    {
        this.state = state;
        this.placementDate = placementDate;
        this.nuggetsCount = nuggetsCount;
        this.durability = durability;
        this.nextEvolutionDate = nextEvolutionDate;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_PrismInformation(output);
    }

    public serializeAs_PrismInformation(output: ICustomDataOutput)
    {
        output.writeByte(this.state);
        if(this.placementDate < 0)
        {
            throw new Error("Forbidden value (" + this.placementDate + ") on element placementDate.");
        }
        output.writeInt(this.placementDate);
        if(this.nuggetsCount < 0)
        {
            throw new Error("Forbidden value (" + this.nuggetsCount + ") on element nuggetsCount.");
        }
        output.writeVarInt(this.nuggetsCount);
        if(this.durability < 0)
        {
            throw new Error("Forbidden value (" + this.durability + ") on element durability.");
        }
        output.writeInt(this.durability);
        if(this.nextEvolutionDate < 0 || this.nextEvolutionDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.nextEvolutionDate + ") on element nextEvolutionDate.");
        }
        output.writeDouble(this.nextEvolutionDate);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PrismInformation(input);
    }

    private deserializeAs_PrismInformation(input: ICustomDataInput)
    {
        this._stateFunc(input);
        this._placementDateFunc(input);
        this._nuggetsCountFunc(input);
        this._durabilityFunc(input);
        this._nextEvolutionDateFunc(input);
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readByte();
        if(this.state < 0)
        {
            throw new Error("Forbidden value (" + this.state + ") on element of PrismInformation.state.");
        }
    }

    private _placementDateFunc(input: ICustomDataInput)
    {
        this.placementDate = input.readInt();
        if(this.placementDate < 0)
        {
            throw new Error("Forbidden value (" + this.placementDate + ") on element of PrismInformation.placementDate.");
        }
    }

    private _nuggetsCountFunc(input: ICustomDataInput)
    {
        this.nuggetsCount = input.readVarUhInt();
        if(this.nuggetsCount < 0)
        {
            throw new Error("Forbidden value (" + this.nuggetsCount + ") on element of PrismInformation.nuggetsCount.");
        }
    }

    private _durabilityFunc(input: ICustomDataInput)
    {
        this.durability = input.readInt();
        if(this.durability < 0)
        {
            throw new Error("Forbidden value (" + this.durability + ") on element of PrismInformation.durability.");
        }
    }

    private _nextEvolutionDateFunc(input: ICustomDataInput)
    {
        this.nextEvolutionDate = input.readDouble();
        if(this.nextEvolutionDate < 0 || this.nextEvolutionDate > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.nextEvolutionDate + ") on element of PrismInformation.nextEvolutionDate.");
        }
    }

}