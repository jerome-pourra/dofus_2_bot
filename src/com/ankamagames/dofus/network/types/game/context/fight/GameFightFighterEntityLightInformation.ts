import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterLightInformations } from "./GameFightFighterLightInformations";

export class GameFightFighterEntityLightInformation extends GameFightFighterLightInformations implements INetworkType
{

	public static readonly protocolId: number = 3181;

	public entityModelId: number = 0;
	public masterId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameFightFighterEntityLightInformation.protocolId;
    }

    public initGameFightFighterEntityLightInformation(id: number = 0, wave: number = 0, level: number = 0, breed: number = 0, sex: boolean = false, alive: boolean = false, entityModelId: number = 0, masterId: number = 0): GameFightFighterEntityLightInformation
    {
        super.initGameFightFighterLightInformations(id,wave,level,breed,sex,alive);
        this.entityModelId = entityModelId;
        this.masterId = masterId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightFighterEntityLightInformation(output);
    }

    public serializeAs_GameFightFighterEntityLightInformation(output: ICustomDataOutput)
    {
        super.serializeAs_GameFightFighterLightInformations(output);
        if(this.entityModelId < 0)
        {
            throw new Error("Forbidden value (" + this.entityModelId + ") on element entityModelId.");
        }
        output.writeByte(this.entityModelId);
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element masterId.");
        }
        output.writeDouble(this.masterId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightFighterEntityLightInformation(input);
    }

    private deserializeAs_GameFightFighterEntityLightInformation(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._entityModelIdFunc(input);
        this._masterIdFunc(input);
    }

    private _entityModelIdFunc(input: ICustomDataInput)
    {
        this.entityModelId = input.readByte();
        if(this.entityModelId < 0)
        {
            throw new Error("Forbidden value (" + this.entityModelId + ") on element of GameFightFighterEntityLightInformation.entityModelId.");
        }
    }

    private _masterIdFunc(input: ICustomDataInput)
    {
        this.masterId = input.readDouble();
        if(this.masterId < -9007199254740992 || this.masterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.masterId + ") on element of GameFightFighterEntityLightInformation.masterId.");
        }
    }

}