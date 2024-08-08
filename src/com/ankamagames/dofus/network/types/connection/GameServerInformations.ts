import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../jerakine/network/INetworkType";
import { BooleanByteWrapper } from "./../../../../jerakine/network/utils/BooleanByteWrapper";

export class GameServerInformations implements INetworkType
{

	public static readonly protocolId: number = 4792;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public id: number = 0;
	public type: number;
	public isMonoAccount: boolean = false;
	public status: number = 1;
	public completion: number = 0;
	public isSelectable: boolean = false;
	public charactersCount: number = 0;
	public charactersSlots: number = 0;
	public date: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return GameServerInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameServerInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameServerInformations.endpointServer;
    }

    public initGameServerInformations(id: number = 0, type: number = -1, isMonoAccount: boolean = false, status: number = 1, completion: number = 0, isSelectable: boolean = false, charactersCount: number = 0, charactersSlots: number = 0, date: number = 0): GameServerInformations
    {
        this.id = id;
        this.type = type;
        this.isMonoAccount = isMonoAccount;
        this.status = status;
        this.completion = completion;
        this.isSelectable = isSelectable;
        this.charactersCount = charactersCount;
        this.charactersSlots = charactersSlots;
        this.date = date;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameServerInformations(output);
    }

    public serializeAs_GameServerInformations(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.isMonoAccount);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.isSelectable);
        output.writeByte(_box0);
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeVarShort(this.id);
        output.writeByte(this.type);
        output.writeByte(this.status);
        output.writeByte(this.completion);
        if(this.charactersCount < 0)
        {
            throw new Error("Forbidden value (" + this.charactersCount + ") on element charactersCount.");
        }
        output.writeByte(this.charactersCount);
        if(this.charactersSlots < 0)
        {
            throw new Error("Forbidden value (" + this.charactersSlots + ") on element charactersSlots.");
        }
        output.writeByte(this.charactersSlots);
        if(this.date < -9007199254740992 || this.date > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.date + ") on element date.");
        }
        output.writeDouble(this.date);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameServerInformations(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.isMonoAccount = BooleanByteWrapper.getFlag(_box0,0);
        this.isSelectable = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_GameServerInformations(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._idFunc(input);
        this._typeFunc(input);
        this._statusFunc(input);
        this._completionFunc(input);
        this._charactersCountFunc(input);
        this._charactersSlotsFunc(input);
        this._dateFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhShort();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of GameServerInformations.id.");
        }
    }

    private _typeFunc(input: ICustomDataInput)
    {
        this.type = input.readByte();
    }

    private _statusFunc(input: ICustomDataInput)
    {
        this.status = input.readByte();
        if(this.status < 0)
        {
            throw new Error("Forbidden value (" + this.status + ") on element of GameServerInformations.status.");
        }
    }

    private _completionFunc(input: ICustomDataInput)
    {
        this.completion = input.readByte();
        if(this.completion < 0)
        {
            throw new Error("Forbidden value (" + this.completion + ") on element of GameServerInformations.completion.");
        }
    }

    private _charactersCountFunc(input: ICustomDataInput)
    {
        this.charactersCount = input.readByte();
        if(this.charactersCount < 0)
        {
            throw new Error("Forbidden value (" + this.charactersCount + ") on element of GameServerInformations.charactersCount.");
        }
    }

    private _charactersSlotsFunc(input: ICustomDataInput)
    {
        this.charactersSlots = input.readByte();
        if(this.charactersSlots < 0)
        {
            throw new Error("Forbidden value (" + this.charactersSlots + ") on element of GameServerInformations.charactersSlots.");
        }
    }

    private _dateFunc(input: ICustomDataInput)
    {
        this.date = input.readDouble();
        if(this.date < -9007199254740992 || this.date > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.date + ") on element of GameServerInformations.date.");
        }
    }

}