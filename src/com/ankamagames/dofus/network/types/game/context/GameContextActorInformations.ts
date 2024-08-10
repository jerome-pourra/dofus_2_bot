import { EntityLook } from "./../look/EntityLook";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";
import { EntityDispositionInformations } from "./EntityDispositionInformations";
import { GameContextActorPositionInformations } from "./GameContextActorPositionInformations";

export class GameContextActorInformations extends GameContextActorPositionInformations implements INetworkType
{

	public static readonly protocolId: number = 9060;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
    }

    public getTypeId()
    {
        return GameContextActorInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameContextActorInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameContextActorInformations.endpointServer;
    }

    public initGameContextActorInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null): GameContextActorInformations
    {
        super.initGameContextActorPositionInformations(contextualId,disposition);
        this.look = look;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameContextActorInformations(output);
    }

    public serializeAs_GameContextActorInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameContextActorPositionInformations(output);
        this.look.serializeAs_EntityLook(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextActorInformations(input);
    }

    private deserializeAs_GameContextActorInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

}