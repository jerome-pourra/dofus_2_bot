import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameFightFighterLightInformations } from "./GameFightFighterLightInformations";

export class GameFightFighterEntityLightInformation extends GameFightFighterLightInformations
{

	public static readonly protocolId: number = 3181;

	public entityModelId: number = 0;
	public masterId: number = 0;

    public constructor()
    {
        super();
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