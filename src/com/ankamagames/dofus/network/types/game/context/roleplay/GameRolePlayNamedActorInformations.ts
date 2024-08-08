import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayActorInformations } from "./GameRolePlayActorInformations";

export class GameRolePlayNamedActorInformations extends GameRolePlayActorInformations implements INetworkType
{

	public static readonly protocolId: number = 2808;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public name: string = "";

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameRolePlayNamedActorInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayNamedActorInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayNamedActorInformations.endpointServer;
    }

    public initGameRolePlayNamedActorInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, name: string = ""): GameRolePlayNamedActorInformations
    {
        super.initGameRolePlayActorInformations(contextualId,disposition,look);
        this.name = name;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayNamedActorInformations(output);
    }

    public serializeAs_GameRolePlayNamedActorInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayActorInformations(output);
        output.writeUTF(this.name);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayNamedActorInformations(input);
    }

    private deserializeAs_GameRolePlayNamedActorInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._nameFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

}