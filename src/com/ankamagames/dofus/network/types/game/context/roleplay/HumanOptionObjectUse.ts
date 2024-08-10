import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanOption } from "./HumanOption";

export class HumanOptionObjectUse extends HumanOption implements INetworkType
{

	public static readonly protocolId: number = 446;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public delayTypeId: number = 0;
	public delayEndTime: number = 0;
	public objectGID: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return HumanOptionObjectUse.protocolId;
    }

    public isEndpointClient()
    {
        return HumanOptionObjectUse.endpointClient;
    }

    public isEndpointServer()
    {
        return HumanOptionObjectUse.endpointServer;
    }

    public initHumanOptionObjectUse(delayTypeId: number = 0, delayEndTime: number = 0, objectGID: number = 0): HumanOptionObjectUse
    {
        this.delayTypeId = delayTypeId;
        this.delayEndTime = delayEndTime;
        this.objectGID = objectGID;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_HumanOptionObjectUse(output);
    }

    public serializeAs_HumanOptionObjectUse(output: ICustomDataOutput)
    {
        super.serializeAs_HumanOption(output);
        output.writeByte(this.delayTypeId);
        if(this.delayEndTime < 0 || this.delayEndTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.delayEndTime + ") on element delayEndTime.");
        }
        output.writeDouble(this.delayEndTime);
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HumanOptionObjectUse(input);
    }

    private deserializeAs_HumanOptionObjectUse(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._delayTypeIdFunc(input);
        this._delayEndTimeFunc(input);
        this._objectGIDFunc(input);
    }

    private _delayTypeIdFunc(input: ICustomDataInput)
    {
        this.delayTypeId = input.readByte();
        if(this.delayTypeId < 0)
        {
            throw new Error("Forbidden value (" + this.delayTypeId + ") on element of HumanOptionObjectUse.delayTypeId.");
        }
    }

    private _delayEndTimeFunc(input: ICustomDataInput)
    {
        this.delayEndTime = input.readDouble();
        if(this.delayEndTime < 0 || this.delayEndTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.delayEndTime + ") on element of HumanOptionObjectUse.delayEndTime.");
        }
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of HumanOptionObjectUse.objectGID.");
        }
    }

}