import { EntityDispositionInformations } from "./../EntityDispositionInformations";
import { EntityLook } from "./../../look/EntityLook";
import { ProtocolTypeManager } from "./../../../../ProtocolTypeManager";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../../jerakine/network/INetworkType";
import { HumanInformations } from "./HumanInformations";
import { GameRolePlayNamedActorInformations } from "./GameRolePlayNamedActorInformations";

export class GameRolePlayHumanoidInformations extends GameRolePlayNamedActorInformations implements INetworkType
{

	public static readonly protocolId: number = 9318;

	public humanoidInfo: HumanInformations;
	public accountId: number = 0;

    public constructor()
    {
        super();
        this.humanoidInfo = new HumanInformations();
    }

    public getTypeId()
    {
        return GameRolePlayHumanoidInformations.protocolId;
    }

    public initGameRolePlayHumanoidInformations(contextualId: number = 0, disposition: EntityDispositionInformations = null, look: EntityLook = null, name: string = "", humanoidInfo: HumanInformations = null, accountId: number = 0): GameRolePlayHumanoidInformations
    {
        super.initGameRolePlayNamedActorInformations(contextualId,disposition,look,name);
        this.humanoidInfo = humanoidInfo;
        this.accountId = accountId;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameRolePlayHumanoidInformations(output);
    }

    public serializeAs_GameRolePlayHumanoidInformations(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayNamedActorInformations(output);
        output.writeShort(this.humanoidInfo.getTypeId());
        this.humanoidInfo.serialize(output);
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element accountId.");
        }
        output.writeInt(this.accountId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayHumanoidInformations(input);
    }

    private deserializeAs_GameRolePlayHumanoidInformations(input: ICustomDataInput)
    {
        super.deserialize(input);
        let _id1: number = input.readUnsignedShort();
        this.humanoidInfo = ProtocolTypeManager.getInstance(HumanInformations,_id1);
        this.humanoidInfo.deserialize(input);
        this._accountIdFunc(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of GameRolePlayHumanoidInformations.accountId.");
        }
    }

}