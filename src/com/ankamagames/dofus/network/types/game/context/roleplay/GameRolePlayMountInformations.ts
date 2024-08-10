import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { GameRolePlayNamedActorInformations } from "./GameRolePlayNamedActorInformations";

export class GameRolePlayMountInformations extends GameRolePlayNamedActorInformations implements INetworkType
{

	public static readonly protocolId: number = 9212;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public ownerName: string = "";
	public level: number = 0;

    public constructor()
    {
        super();
    }

    public getTypeId()
    {
        return GameRolePlayMountInformations.protocolId;
    }

    public isEndpointClient()
    {
        return GameRolePlayMountInformations.endpointClient;
    }

    public isEndpointServer()
    {
        return GameRolePlayMountInformations.endpointServer;
    }

    public initGameRolePlayMountInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, name: string = "", ownerName: string = "", level: number = 0): GameRolePlayMountInformations
    {
        super.initGameRolePlayNamedActorInformations(contextualId,disposition,look,name);
        this.ownerName = ownerName;
        this.level = level;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayMountInformations(output);
    }

    public serializeAs_GameRolePlayMountInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayNamedActorInformations(output);
        output.writeUTF(this.ownerName);
        if(this.level < 0 || this.level > 255)
        {
            throw new Error("Forbidden value (" + this.level + ") on element level.");
        }
        output.writeByte(this.level);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayMountInformations(input);
    }

    private deserializeAs_GameRolePlayMountInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._ownerNameFunc(input);
        this._levelFunc(input);
    }

    private _ownerNameFunc(input: ICustomDataInput)
    {
        this.ownerName = input.readUTF();
    }

    private _levelFunc(input: ICustomDataInput)
    {
        this.level = input.readUnsignedByte();
        if(this.level < 0 || this.level > 255)
        {
            throw new Error("Forbidden value (" + this.level + ") on element of GameRolePlayMountInformations.level.");
        }
    }

}