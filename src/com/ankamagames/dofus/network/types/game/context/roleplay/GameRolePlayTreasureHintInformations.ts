import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayTreasureHintInformations extends GameRolePlayActorInformations implements INetworkType
{

	public static readonly protocolId: number = 9279;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public npcId: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameRolePlayTreasureHintInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayTreasureHintInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayTreasureHintInformations.endpointServer;
    }

    public initGameRolePlayTreasureHintInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, npcId: number = 0): GameRolePlayTreasureHintInformations
    {
        super.initGameRolePlayActorInformations(contextualId,disposition,look);
        this.npcId = npcId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayTreasureHintInformations(output);
    }

    public serializeAs_GameRolePlayTreasureHintInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayActorInformations(output);
        if(this.npcId < 0)
        {
            throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
        }
        output.writeVarShort(this.npcId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayTreasureHintInformations(input);
    }

    private deserializeAs_GameRolePlayTreasureHintInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._npcIdFunc(input);
    }

    private _npcIdFunc(input: ICustomDataInput)
    {
        this.npcId = input.readVarUhShort();
        if(this.npcId < 0)
        {
            throw new Error("Forbidden value (" + this.npcId + ") on element of GameRolePlayTreasureHintInformations.npcId.");
        }
    }

}